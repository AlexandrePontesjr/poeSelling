package br.com.twobrothers.poeselling.repository

import br.com.twobrothers.poeselling.domain.Product
import br.com.twobrothers.poeselling.domain.Tenant
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository

interface ProductRepository : JpaRepository<Product, Int> {
    fun findAllByTenant (pageable: Pageable, tenant: Tenant) : Page<Product>
    fun findAllByTypeAndTenant (pageable: Pageable, type: Product.Type, tenant: Tenant) : Page<Product>
}
