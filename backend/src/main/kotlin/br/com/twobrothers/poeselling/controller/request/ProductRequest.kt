package br.com.twobrothers.poeselling.controller.request

import br.com.twobrothers.poeselling.domain.Product
import java.math.BigDecimal

data class ProductRequest (
    val name: String,
    val type: Product.Type,
    val price: BigDecimal,
    val description: String,
    val image: String,
    val gameId: Int
)
