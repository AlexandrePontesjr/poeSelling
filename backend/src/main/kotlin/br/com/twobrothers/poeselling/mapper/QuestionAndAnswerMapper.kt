package br.com.twobrothers.poeselling.mapper

import br.com.twobrothers.poeselling.controller.request.QuestionAndAnswerRequest
import br.com.twobrothers.poeselling.controller.response.QuestionAndAnswerResponse
import br.com.twobrothers.poeselling.controller.response.TenantResponse
import br.com.twobrothers.poeselling.domain.QuestionAndAnswer
import br.com.twobrothers.poeselling.domain.Tenant
import br.com.twobrothers.poeselling.domain.User

fun QuestionAndAnswerRequest.toDomain(username: String): QuestionAndAnswer =
    toDomain(username, 0)

fun QuestionAndAnswerRequest.toDomain(username: String, id: Int): QuestionAndAnswer =
    QuestionAndAnswer(
        id = id,
        question = question,
        answer = answer,
        createdBy = User(
            username = username
        ),
        tenant = Tenant(
            id = gameId
        )
    )

fun QuestionAndAnswer.toResponse(): QuestionAndAnswerResponse =
    QuestionAndAnswerResponse(
        id = id,
        createdBy = createdBy.username,
        question =  question,
        answer = answer,
        game = TenantResponse(
            id = tenant.id,
            name = tenant.name,
            image = tenant.image
        )
    )
