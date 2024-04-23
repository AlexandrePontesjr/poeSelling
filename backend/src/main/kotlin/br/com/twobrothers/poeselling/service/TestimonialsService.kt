package br.com.twobrothers.poeselling.service

import br.com.twobrothers.poeselling.domain.Tenant
import br.com.twobrothers.poeselling.domain.Testimonials
import br.com.twobrothers.poeselling.repository.TestimonialsRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class TestimonialsService(
    val testimonialsRepository: TestimonialsRepository
) {
    fun gelAll (pageable: Pageable, tenant: Tenant) : Page<Testimonials> {
        return testimonialsRepository.findAllByGame(pageable, tenant)
    }

    fun save (testimonials: Testimonials) : Testimonials {
        return testimonialsRepository.save(testimonials)
    }

    fun delete (id: Int, gameId: Int) {
        testimonialsRepository.delete(
            Testimonials(
                id = id,
                game = Tenant(
                    id = gameId
                )
            )
        )
    }

    fun updateStatus(id: Int, gameId: Int, status: Testimonials.TestimonialStatus): Testimonials {
        val haveTestimonials = testimonialsRepository.findById(id)
        val testimonials = when (haveTestimonials.isPresent) {
            true -> haveTestimonials.get()
            false -> throw RuntimeException("Testimonial not found")
        }

        val testimonialWithStatusUpdate = testimonials.copy(
            status = status
        )
        return testimonialsRepository.save(testimonialWithStatusUpdate)
    }
}
