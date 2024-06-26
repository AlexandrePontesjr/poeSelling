package br.com.twobrothers.poeselling.mapper

import br.com.twobrothers.poeselling.controller.response.ProductResponse
import br.com.twobrothers.poeselling.controller.request.ProductRequest
import br.com.twobrothers.poeselling.controller.response.TenantResponse
import br.com.twobrothers.poeselling.domain.Product
import br.com.twobrothers.poeselling.domain.Tenant
import br.com.twobrothers.poeselling.domain.User

fun ProductRequest.toDomain(username: String): Product =
    toDomain(username, 0)

fun ProductRequest.toDomain(username: String, id: Int): Product =
    Product(
        id = id,
        name = name,
        description = description,
        price = price,
        type = type,
        image = image,
        createdBy = User(
            username = username
        ),
        tenant = Tenant(
            id = gameId
        )
    )

fun Product.toResponse(): ProductResponse =
    ProductResponse(
        id = id,
        name = name,
        description = description,
        createdBy = createdBy.username,
        price = price,
        image = image,
        type = type,
        game = TenantResponse(
            id = tenant.id,
            name = tenant.name,
            image = tenant.image
        )
    )
