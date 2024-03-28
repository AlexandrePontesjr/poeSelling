package br.com.twobrothers.poeselling.domain

import jakarta.persistence.*
import jakarta.persistence.GenerationType.IDENTITY
import java.math.BigDecimal
import java.util.*

@Entity
@Table(name = "poe_selling_product")
data class Product(
    @Id
    @GeneratedValue(strategy = IDENTITY)
    val id: Int,
    val name: String = "",
    val type: Type = Type.SERVICE,
    val price: BigDecimal = BigDecimal.ZERO,
    val description: String = "",
    val image: String = "",
    val isPromotion: Boolean = false,
    val promotionExpiration: Date = Date(),
    val discount: BigDecimal = BigDecimal.ZERO,
    val status: String = "active",
    @ManyToOne
    val createdBy: User = User(),
) {
    enum class Type{
        ITEM,
        SERVICE,
        ALL,
    }
}
