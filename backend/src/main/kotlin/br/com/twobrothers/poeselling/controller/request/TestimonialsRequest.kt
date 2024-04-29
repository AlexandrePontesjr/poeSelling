package br.com.twobrothers.poeselling.controller.request

import br.com.twobrothers.poeselling.domain.Testimonials
import org.apache.logging.log4j.util.Strings

data class TestimonialsRequest (
    val name: String = Strings.EMPTY,
    val message: String = Strings.EMPTY,
    val avatarId: Int = Int.MIN_VALUE,
    val rating: Int = Int.MIN_VALUE,
    val status: Testimonials.TestimonialStatus,
    val gameId: Int
)
