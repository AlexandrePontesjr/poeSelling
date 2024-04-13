package br.com.twobrothers.poeselling.repository

import br.com.twobrothers.poeselling.domain.Tenant
import org.springframework.data.jpa.repository.JpaRepository

interface TenantRepository : JpaRepository<Tenant, Int>
