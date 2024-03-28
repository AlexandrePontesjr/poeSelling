package br.com.twobrothers.poeselling.exception

import org.springframework.http.HttpStatus

class BusinessException(val statusCode: HttpStatus, override val message: String): RuntimeException(message) {
}