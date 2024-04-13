package br.com.twobrothers.poeselling.service

import br.com.twobrothers.poeselling.domain.Tenant
import br.com.twobrothers.poeselling.repository.TenantRepository
import org.springframework.stereotype.Service

@Service
class TenantService(
    val tenantRepository: TenantRepository
) {

    fun gelAll () : List<Tenant> {
        return tenantRepository.findAll()
    }
}
