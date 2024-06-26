package br.com.twobrothers.poeselling.repository

import br.com.twobrothers.poeselling.domain.Tenant
import br.com.twobrothers.poeselling.domain.Testimonials
import br.com.twobrothers.poeselling.domain.Testimonials.TestimonialStatus
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository

interface TestimonialsRepository : JpaRepository<Testimonials, Int>{
    fun findAllByGame (pageable: Pageable, tenant: Tenant) : Page<Testimonials>
    fun findAllByGameAndStatus (pageable: Pageable, tenant: Tenant, status: TestimonialStatus) : Page<Testimonials>
}
