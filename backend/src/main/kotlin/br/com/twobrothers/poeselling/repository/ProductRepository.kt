package br.com.twobrothers.poeselling.repository

import br.com.twobrothers.poeselling.domain.Product
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository

interface ProductRepository : JpaRepository<Product, Int> {
    fun findAllByType (pageable: Pageable, type: Product.Type) : Page<Product>
}
