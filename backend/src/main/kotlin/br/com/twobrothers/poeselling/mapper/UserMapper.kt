package br.com.twobrothers.poeselling.mapper

import br.com.twobrothers.poeselling.controller.request.LoginRequest
import br.com.twobrothers.poeselling.controller.response.LoginResponse
import br.com.twobrothers.poeselling.domain.User
import br.com.twobrothers.poeselling.domain.User.Companion.JWT_SECRET_KEY
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import java.nio.charset.StandardCharsets
import java.util.*


fun LoginRequest.toDomain(): User =
    User(
        username = username,
        password = password
    )

fun User.toResponse(): LoginResponse =
    LoginResponse(
        token = createJWT(this),
        expiresIn = 3600
    )

fun createJWT(user: User): String {
    val key = Keys.hmacShaKeyFor(JWT_SECRET_KEY.toByteArray(StandardCharsets.UTF_8))
    val claims = Jwts.claims().subject(user.username)
        .issuer("poe_selling_${UUID.randomUUID()}")
        .expiration(Date(System.currentTimeMillis() + 3600 * 1000))
        .build()

    return Jwts.builder()
        .claims(claims)
        .signWith(key)
        .compact()
}

fun String.decodeUsernameFromJWT(): String {
    val token = this.split(" ").last()

    val key = Keys.hmacShaKeyFor(JWT_SECRET_KEY.toByteArray(StandardCharsets.UTF_8))
    val verificationParser = Jwts.parser().verifyWith(key).build()

    val claims = verificationParser.parseSignedClaims(token)


    return claims.payload.subject
}
