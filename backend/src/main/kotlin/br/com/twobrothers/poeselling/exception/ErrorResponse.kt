package br.com.twobrothers.poeselling.exception

data class ErrorResponse(
    val message: String,
    val error: Error,
) {
    data class Error(
        val code: String,
        val details: String,
    )
}
