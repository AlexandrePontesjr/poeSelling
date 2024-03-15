package br.com.twobrothers.poeselling.controller.response

data class LoginResponse (
    val token: String,
    val expiresIn: Int,
)
