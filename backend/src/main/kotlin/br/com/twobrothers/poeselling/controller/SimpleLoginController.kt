package br.com.twobrothers.poeselling.controller

import br.com.twobrothers.poeselling.controller.request.LoginRequest
import br.com.twobrothers.poeselling.controller.response.LoginResponse
import br.com.twobrothers.poeselling.mapper.toDomain
import br.com.twobrothers.poeselling.mapper.toResponse
import br.com.twobrothers.poeselling.service.LoginService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController(value = "User")
@RequestMapping(name = "User Login", value = ["login"])
class SimpleLoginController(
    val loginService: LoginService
) {

    @PostMapping
    fun login(@RequestBody loginRequest: LoginRequest): ResponseEntity<LoginResponse>{

        return ResponseEntity.ok(loginService.login(loginRequest.toDomain()).toResponse())
    }
}