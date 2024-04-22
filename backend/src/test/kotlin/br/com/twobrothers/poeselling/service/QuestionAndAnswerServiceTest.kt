package br.com.twobrothers.poeselling.service

import br.com.twobrothers.poeselling.repository.QuestionAndAnswerRepository
import br.com.twobrothers.poeselling.utils.randomQuestionAndAnswer
import br.com.twobrothers.poeselling.utils.randomString
import br.com.twobrothers.poeselling.utils.randomTenant
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.mockito.kotlin.*
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.Pageable
import java.util.*

class QuestionAndAnswerServiceTest {

    private val questionAndAnswerRepository: QuestionAndAnswerRepository = mock()
    private val questionAndAnswerService = QuestionAndAnswerService(questionAndAnswerRepository)

    @Test
    fun `should get all Question and Answers when exists`() {
        val pageable = mock<Pageable>()
        val questionAndAnswer = randomQuestionAndAnswer()
        val page = PageImpl(listOf(questionAndAnswer))
        val tenant = randomTenant()

        whenever(questionAndAnswerRepository.findAllByTenant(pageable, tenant)).thenReturn(page)

        val result = questionAndAnswerService.gelAll(pageable, tenant)

        verify(questionAndAnswerRepository, times(1)).findAllByTenant(pageable, tenant)
        assertEquals(1, result.content.size.toLong())
        assertEquals(questionAndAnswer.id, result.content[0].id)
        assertEquals(questionAndAnswer.question, result.content[0].question)
        assertEquals(questionAndAnswer.answer, result.content[0].answer)
    }

    @Test
    fun `should get Question and Answer when exists`() {
        val questionAndAnswer = randomQuestionAndAnswer()
        whenever(questionAndAnswerRepository.findById(any())).thenReturn(Optional.of(questionAndAnswer))

        val result = questionAndAnswerService.get(questionAndAnswer.id)

        assertEquals(questionAndAnswer.id, result.id)
        assertEquals(questionAndAnswer.question, result.question)
        assertEquals(questionAndAnswer.answer, result.answer)
        verify(questionAndAnswerRepository, times(1)).findById(any())
    }

    @Test
    fun `should failed when Question and Answer not exists`() {
        val questionAndAnswer = randomQuestionAndAnswer()
        whenever(questionAndAnswerRepository.findById(any())).thenReturn(Optional.empty())

        assertThrows<RuntimeException> { questionAndAnswerService.get(questionAndAnswer.id) }
        verify(questionAndAnswerRepository, times(1)).findById(any())
    }

    @Test
    fun save() {
        val questionAndAnswer = randomQuestionAndAnswer()
        whenever(questionAndAnswerRepository.save(eq(questionAndAnswer))).thenReturn(questionAndAnswer)

        val result = questionAndAnswerService.save(questionAndAnswer)

        assertEquals(questionAndAnswer.id, result.id)
        assertEquals(questionAndAnswer.question, result.question)
        assertEquals(questionAndAnswer.answer, result.answer)
        assertEquals(questionAndAnswer.status, result.status)
        assertEquals(questionAndAnswer.createdBy, result.createdBy)
        verify(questionAndAnswerRepository, times(1)).save(any())
    }

    @Test
    fun delete() {
        doNothing().whenever(questionAndAnswerRepository).delete(any())

        questionAndAnswerService.delete(randomQuestionAndAnswer().id, randomTenant().id, randomString())

        verify(questionAndAnswerRepository, times(1)).delete(any())
    }
}
