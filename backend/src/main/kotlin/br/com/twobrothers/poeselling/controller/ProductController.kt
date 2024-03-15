package br.com.twobrothers.poeselling.controller

import br.com.twobrothers.poeselling.controller.request.ProductRequest
import br.com.twobrothers.poeselling.controller.response.ProductResponse
import br.com.twobrothers.poeselling.domain.Product
import br.com.twobrothers.poeselling.domain.Product.Type.ALL
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
    val productService: ProductService,
) {

    @GetMapping
    fun listAll (pageable: Pageable, @Param("type") type: Product.Type = ALL) : ResponseEntity<Page<ProductResponse>> {
        return ResponseEntity.ok(productService.gelAll(pageable, type).map { it.toResponse() })
    }

    @PostMapping
    fun create (
        @RequestBody productRequest: ProductRequest,
        @RequestHeader("Authorization") token: String,
    ) : ResponseEntity<ProductResponse> {
        return ResponseEntity(
            productService.save(
                productRequest.toDomain(token.decodeUsernameFromJWT())
            ).toResponse(), HttpStatus.CREATED
        )
    }

    @PutMapping(value = ["/{id}"])
    fun edit (@PathVariable id: Int, @RequestBody productRequest: ProductRequest) : ResponseEntity<ProductResponse> {
        return ResponseEntity(
            productService.save(
                productRequest.toDomain("yan", id)
            ).toResponse(), HttpStatus.OK
        )
    }

    @DeleteMapping(value = ["/{id}"])
    fun delete (
        @PathVariable id: Int,
        @RequestHeader("Authorization") token: String
    ) : ResponseEntity<Any> {
        productService.delete(id, token.decodeUsernameFromJWT())
        return ResponseEntity(HttpStatus.OK)
    }

    @GetMapping(value = ["/{id}"])
    fun getDetails (@PathVariable id: Int) : ResponseEntity<ProductResponse> {
        return ResponseEntity.ok(productService.get(id).toResponse())
    }
}
