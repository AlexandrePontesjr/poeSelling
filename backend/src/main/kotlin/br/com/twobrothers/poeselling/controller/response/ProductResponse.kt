package br.com.twobrothers.poeselling.controller.response

import br.com.twobrothers.poeselling.domain.Product
import java.math.BigDecimal

data class ProductResponse (
    val id: Int,
    val name: String = "",
    val type: Product.Type = Product.Type.SERVICE,
    val price: BigDecimal = BigDecimal.ZERO,
    val description: String = "",
    val image: String = "",
    val isPromotion: Boolean = false,
    val createdBy: String,
)
