package br.com.twobrothers.poeselling.mapper

import br.com.twobrothers.poeselling.controller.request.TestimonialsRequest
import br.com.twobrothers.poeselling.controller.response.TenantResponse
import br.com.twobrothers.poeselling.controller.response.TestimonialsResponse
import br.com.twobrothers.poeselling.domain.Tenant
import br.com.twobrothers.poeselling.domain.Testimonials

fun TestimonialsRequest.toDomain(): Testimonials =
    this.toDomain(0)
fun TestimonialsRequest.toDomain(id: Int): Testimonials =
    Testimonials(
        id = id,
        name = name,
        message = message,
        game = Tenant(
            id = gameId
        ),
        rating = rating,
        avatarId = avatarId,
        status = status,
    )

fun Testimonials.toResponse(): TestimonialsResponse =
    TestimonialsResponse(
        id = id,
        name = name,
        message = message,
        game = TenantResponse(
            id = game.id,
            name = game.name,
            image = game.image
        ),
        rating = rating,
        avatarId = avatarId,
        status = status
    )
