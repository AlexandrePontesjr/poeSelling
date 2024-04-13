package br.com.twobrothers.poeselling.repository

import br.com.twobrothers.poeselling.domain.QuestionAndAnswer
import br.com.twobrothers.poeselling.domain.Tenant
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository

interface QuestionAndAnswerRepository : JpaRepository<QuestionAndAnswer, Int> {
    fun findAllByTenant(pageable: Pageable, tenant: Tenant): Page<QuestionAndAnswer>
}
