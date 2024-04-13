package br.com.twobrothers.poeselling.domain

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import org.apache.logging.log4j.util.Strings.EMPTY

@Entity
@Table(name = "poe_selling_tenant")
data class Tenant(
    @Id
    val id: Int = Int.MIN_VALUE,
    val name: String = EMPTY,
    val image: String = EMPTY
)
