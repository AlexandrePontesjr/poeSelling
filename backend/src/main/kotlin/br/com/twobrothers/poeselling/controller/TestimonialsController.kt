package br.com.twobrothers.poeselling.controller

import br.com.twobrothers.poeselling.controller.request.ProductRequest
import br.com.twobrothers.poeselling.controller.request.TestimonialsRequest
import br.com.twobrothers.poeselling.controller.response.ProductResponse
import br.com.twobrothers.poeselling.controller.response.TestimonialsResponse
import br.com.twobrothers.poeselling.domain.Product
import br.com.twobrothers.poeselling.domain.Product.Type.ALL
import br.com.twobrothers.poeselling.domain.Testimonials
import br.com.twobrothers.poeselling.domain.Testimonials.TestimonialStatus.EMPTY
import br.com.twobrothers.poeselling.exception.ExceptionAdviceController.Companion.logger
import br.com.twobrothers.poeselling.mapper.decodeUsernameFromJWT
import br.com.twobrothers.poeselling.mapper.toDomain
import br.com.twobrothers.poeselling.mapper.toResponse
import br.com.twobrothers.poeselling.service.ProductService
import br.com.twobrothers.poeselling.service.TestimonialsService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.query.Param
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController(value = "Testimonials")
@RequestMapping(name = "Testimonials", value = ["testimonials"])
class TestimonialsController (
    private val testimonialsService: TestimonialsService,
) {

    @GetMapping
    fun listAll (pageable: Pageable, gameId: Int, status: Testimonials.TestimonialStatus = EMPTY) : ResponseEntity<Page<TestimonialsResponse>> {
        logger.info("Starting to list all testimonials by gameId: $gameId")
        return ResponseEntity.ok(testimonialsService.gelAll(pageable, gameId.toDomain(), status).map { it.toResponse() }).also {
            logger.info("Done to list testimonials count: ${it.body?.totalElements}")
        }
    }

    @PostMapping
    fun create (
        @RequestBody testimonials: TestimonialsRequest,
    ) : ResponseEntity<TestimonialsResponse> {
        logger.info("Starting to create a testimonial: $testimonials")
        return ResponseEntity(
            testimonialsService.save(
                testimonials.toDomain()
            ).toResponse(), HttpStatus.CREATED
        ).also {
            logger.info("Done to create testimonial with id: ${it.body?.id}")
        }
    }

    @PatchMapping(value = ["/{id}"])
    fun updateStatus(
        @PathVariable id: Int,
        gameId: Int,
        status: Testimonials.TestimonialStatus
    ): ResponseEntity<TestimonialsResponse> {
        logger.info("Starting to update status of a testimonial with id: $id")
        return ResponseEntity(
            testimonialsService.updateStatus(id, gameId, status).toResponse(), HttpStatus.OK
        ).also {
            logger.info("Done to update status of testimonial with id: $id")
        }

    }

    @PutMapping(value = ["/{id}"])
    fun edit (
        @PathVariable id: Int,
        @RequestBody testimonials: TestimonialsRequest,
    ) : ResponseEntity<TestimonialsResponse> {
        logger.info("Starting to edit a testimonial: $testimonials")
        return ResponseEntity(
            testimonialsService.save(
                testimonials.toDomain(id)
            ).toResponse(), HttpStatus.OK
        ).also {
            logger.info("Done to edit testimonial with id: ${it.body?.id}")
        }
    }

    @DeleteMapping(value = ["/{id}"])
    fun delete (
        @PathVariable id: Int,
        @RequestParam("gameId") gameId: Int,
    ) : ResponseEntity<Any> {
        logger.info("Starting to delete testimonial with id: $id")
        testimonialsService.delete(id, gameId).also {
            logger.info("Done to delete testimonial with id: $id")
        }
        return ResponseEntity(HttpStatus.OK)
    }
}
