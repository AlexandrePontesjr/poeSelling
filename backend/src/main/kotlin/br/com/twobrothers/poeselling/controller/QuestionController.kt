package br.com.twobrothers.poeselling.controller

import br.com.twobrothers.poeselling.controller.request.QuestionAndAnswerRequest
import br.com.twobrothers.poeselling.controller.response.QuestionAndAnswerResponse
import br.com.twobrothers.poeselling.mapper.decodeUsernameFromJWT
import br.com.twobrothers.poeselling.mapper.toDomain
import br.com.twobrothers.poeselling.mapper.toResponse
import br.com.twobrothers.poeselling.service.QuestionAndAnswerService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.HttpStatus.CREATED
import org.springframework.http.HttpStatus.OK
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController(value = "QA")
@RequestMapping(name = "Question and Answers", value = ["questions"])
class QuestionController(
    val questionAndAnswerService: QuestionAndAnswerService
) {

    @GetMapping
    fun listAll(pageable: Pageable): ResponseEntity<Page<QuestionAndAnswerResponse>>{
        return ResponseEntity.ok(questionAndAnswerService.gelAll(pageable).map { it.toResponse() })
    }

    @PostMapping
    fun create(
        @RequestBody questionAndAnswerRequest: QuestionAndAnswerRequest,
        @RequestHeader("Authorization") token: String,
    ): ResponseEntity<QuestionAndAnswerResponse>{
        return ResponseEntity(
            questionAndAnswerService.save(
                questionAndAnswerRequest.toDomain(token.decodeUsernameFromJWT())
            ).toResponse(), CREATED
        )
    }

    @PutMapping(value = ["/{id}"])
    fun edit(
        @PathVariable id: Int,
        @RequestBody questionAndAnswerRequest: QuestionAndAnswerRequest,
        @RequestHeader("Authorization") token: String
    ): ResponseEntity<QuestionAndAnswerResponse>{
        return ResponseEntity(
            questionAndAnswerService.save(
                questionAndAnswerRequest.toDomain(token.decodeUsernameFromJWT(), id)
            ).toResponse(), OK
        )
    }

    @DeleteMapping(value = ["/{id}"])
    fun delete(
        @PathVariable id: Int,
        @RequestHeader("Authorization") token: String
    ): ResponseEntity<Any>{
        questionAndAnswerService.delete(id, token.decodeUsernameFromJWT())
        return ResponseEntity(OK)
    }

    @GetMapping(value = ["/{id}"])
    fun getDetails(@PathVariable id: Int): ResponseEntity<QuestionAndAnswerResponse>{
        return ResponseEntity.ok(questionAndAnswerService.get(id).toResponse())
    }
}