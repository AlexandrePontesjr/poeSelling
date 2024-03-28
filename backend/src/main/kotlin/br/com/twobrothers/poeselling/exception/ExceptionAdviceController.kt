package br.com.twobrothers.poeselling.exception

import br.com.twobrothers.poeselling.domain.Product
import io.jsonwebtoken.ExpiredJwtException
import io.jsonwebtoken.security.SignatureException
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException

@RestControllerAdvice
class ExceptionAdviceController {

    companion object {
        val logger: Logger = LoggerFactory.getLogger(ExceptionAdviceController::class.java)
    }

    @ExceptionHandler(BusinessException::class)
    fun businessException (exception: BusinessException) : ResponseEntity<ErrorResponse> {
        logger.error("Business exception")
        return ResponseEntity
            .status(exception.statusCode)
            .body(
                ErrorResponse(
                    message = exception.message,
                    error = ErrorResponse.Error(
                        code = "USR001",
                        details = exception.cause?.message.toString()
                    )
                )
            )
    }

    @ExceptionHandler(ExpiredJwtException::class)
    fun handleTokenExpired (exception: ExpiredJwtException) : ResponseEntity<ErrorResponse> {
        logger.error("Token expired")
        return ResponseEntity
            .status(HttpStatus.UNAUTHORIZED)
            .body(
                ErrorResponse(
                    message = "Token Expired",
                    error = ErrorResponse.Error(
                        code = "USR001",
                        details = exception.message!!
                    )
                )
            )
    }

    @ExceptionHandler(SignatureException::class)
    fun handleInvalidSignature (exception: SignatureException) : ResponseEntity<ErrorResponse> {
        logger.error("Invalid signature")
        return ResponseEntity
            .status(HttpStatus.UNAUTHORIZED)
            .body(
                ErrorResponse(
                    message = "Invalid signature",
                    error = ErrorResponse.Error(
                        code = "USR002",
                        details = exception.message!!
                    )
                )
            )
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException::class)
    fun handleMethodArgumentTypeMismatch (exception: MethodArgumentTypeMismatchException) : ResponseEntity<ErrorResponse> {
        logger.error("Method argument type mismatch")
        if (exception.message?.contains("Product\$Type") == true)
            return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(
                    ErrorResponse(
                        message = "Failed to convert input type to Product.Type",
                        error = ErrorResponse.Error(
                            code = "INP001",
                            details = "Type can be only ${Product.Type.entries.joinToString { it.name }}"
                        )
                    )
                )
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(
                ErrorResponse(
                    message = "Method argument type mismatch",
                    error = ErrorResponse.Error(
                        code = "INP002",
                        details = exception.message!!
                    )
                )
            )
    }
}
