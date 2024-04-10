package br.com.twobrothers.poeselling.controller

import br.com.twobrothers.poeselling.controller.request.ProductRequest
import br.com.twobrothers.poeselling.controller.response.ProductResponse
import br.com.twobrothers.poeselling.domain.Product
import br.com.twobrothers.poeselling.domain.Product.Type.ALL
import br.com.twobrothers.poeselling.exception.ExceptionAdviceController.Companion.logger
import br.com.twobrothers.poeselling.mapper.decodeUsernameFromJWT
import br.com.twobrothers.poeselling.mapper.toDomain
import br.com.twobrothers.poeselling.mapper.toResponse
import br.com.twobrothers.poeselling.service.ProductService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.query.Param
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController(value = "Products")
@RequestMapping(name = "Product", value = ["products"])
class ProductController (
    private val productService: ProductService,
) {

    @GetMapping
    fun listAll (pageable: Pageable, @Param("type") type: Product.Type = ALL) : ResponseEntity<Page<ProductResponse>> {
        logger.info("Starting to list all products by type: $type")
        return ResponseEntity.ok(productService.gelAll(pageable, type).map { it.toResponse() }).also {
            logger.info("Done to list products count: ${it.body?.totalElements}")
        }
    }

    @PostMapping
    fun create (
        @RequestBody productRequest: ProductRequest,
        @RequestHeader("Authorization") token: String,
    ) : ResponseEntity<ProductResponse> {
        logger.info("Starting to create a product: $productRequest")
        return ResponseEntity(
            productService.save(
                productRequest.toDomain(token.decodeUsernameFromJWT())
            ).toResponse(), HttpStatus.CREATED
        ).also {
            logger.info("Done to create product with id: ${it.body?.id}")
        }
    }

    @PutMapping(value = ["/{id}"])
    fun edit (@PathVariable id: Int, @RequestBody productRequest: ProductRequest) : ResponseEntity<ProductResponse> {
        logger.info("Starting to edit a product: $productRequest")
        return ResponseEntity(
            productService.save(
                productRequest.toDomain("yan", id)
            ).toResponse(), HttpStatus.OK
        ).also {
            logger.info("Done to edit product with id: ${it.body?.id}")
        }
    }

    @DeleteMapping(value = ["/{id}"])
    fun delete (
        @PathVariable id: Int,
        @RequestHeader("Authorization") token: String
    ) : ResponseEntity<Any> {
        logger.info("Starting to delete product with id: $id")
        productService.delete(id, token.decodeUsernameFromJWT()).also {
            logger.info("Done to delete product with id: $id")
        }
        return ResponseEntity(HttpStatus.OK)
    }

    @GetMapping(value = ["/{id}"])
    fun getDetails (@PathVariable id: Int) : ResponseEntity<ProductResponse> {
        return ResponseEntity.ok(productService.get(id).toResponse())
    }
}
