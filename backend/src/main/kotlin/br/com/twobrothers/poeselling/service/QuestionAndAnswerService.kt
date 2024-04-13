package br.com.twobrothers.poeselling.service

import br.com.twobrothers.poeselling.domain.QuestionAndAnswer
import br.com.twobrothers.poeselling.domain.Tenant
import br.com.twobrothers.poeselling.domain.User
import br.com.twobrothers.poeselling.repository.QuestionAndAnswerRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class QuestionAndAnswerService(
    val questionAndAnswerRepository: QuestionAndAnswerRepository
) {
    // Retrieves all QuestionAndAnswer objects based on the provided pageable parameters.
    fun gelAll (pageable: Pageable, tenant: Tenant) : Page<QuestionAndAnswer>{
        return questionAndAnswerRepository.findAllByTenant(pageable, tenant)
    }

    fun get (id: Int) : QuestionAndAnswer{
        return try {
            questionAndAnswerRepository.findById(id).get()
        } catch (ex: Exception) {
            throw RuntimeException("Question and Answer not found")
        }
    }

    fun save (qa: QuestionAndAnswer) : QuestionAndAnswer{
        return questionAndAnswerRepository.save(qa)
    }

    fun delete (id: Int, gameId: Int, username: String) {
        questionAndAnswerRepository.delete(
            QuestionAndAnswer(
                id = id,
                createdBy = User(
                    username = username
                ),
                tenant = Tenant(
                    id = gameId
                )
            )
        )
    }
}
