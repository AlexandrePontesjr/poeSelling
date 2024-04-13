package br.com.twobrothers.poeselling.controller

import br.com.twobrothers.poeselling.controller.request.ProductRequest
import br.com.twobrothers.poeselling.controller.response.ProductResponse
import br.com.twobrothers.poeselling.domain.Product
import br.com.twobrothers.poeselling.domain.Tenant
import br.com.twobrothers.poeselling.mapper.decodeUsernameFromJWT
import br.com.twobrothers.poeselling.mapper.toDomain
import br.com.twobrothers.poeselling.mapper.toResponse
import br.com.twobrothers.poeselling.service.TenantService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.query.Param
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController(value = "Games")
@RequestMapping(name = "Game", value = ["games"])
class GameController(
    val tenantService: TenantService
) {

    @GetMapping
    fun listAll () : ResponseEntity<List<Tenant>> {
        return ResponseEntity.ok(tenantService.gelAll())
    }
}
