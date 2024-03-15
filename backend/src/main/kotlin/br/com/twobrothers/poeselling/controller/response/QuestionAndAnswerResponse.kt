package br.com.twobrothers.poeselling.controller.response

data class QuestionAndAnswerResponse (
    val id: Int,
    val question: String,
    val answer: String,
    val createdBy: String,
)
