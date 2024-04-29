package br.com.twobrothers.poeselling.domain

import jakarta.persistence.*
import jakarta.persistence.GenerationType.IDENTITY
import org.apache.logging.log4j.util.Strings.EMPTY

@Entity
@Table(name = "poe_selling_testimonials")
data class Testimonials(
    @Id
    @GeneratedValue(strategy = IDENTITY)
    val id: Int,
    val name: String = EMPTY,
    val message: String = EMPTY,
    val avatarId: Int = Int.MIN_VALUE,
    val rating: Int = Int.MIN_VALUE,
    val status: TestimonialStatus = TestimonialStatus.EMPTY,
    @ManyToOne
    val game: Tenant = Tenant()
) {
    enum class TestimonialStatus {
        EMPTY, PENDING, APPROVED, REJECTED
    }
}
