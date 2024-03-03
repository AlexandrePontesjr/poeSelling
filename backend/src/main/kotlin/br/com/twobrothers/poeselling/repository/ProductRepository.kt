package br.com.twobrothers.poeselling.repository

import br.com.twobrothers.poeselling.domain.Product
import org.springframework.data.jpa.repository.JpaRepository

interface ProductRepository: JpaRepository<Product, Int> {
}