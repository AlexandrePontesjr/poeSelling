package br.com.twobrothers.poeselling.repository

import br.com.twobrothers.poeselling.domain.QuestionAndAnswer
import org.springframework.data.jpa.repository.JpaRepository

interface QuestionAndAnswerRepository : JpaRepository<QuestionAndAnswer, Int> {
}
