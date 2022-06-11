package br.com.zupacademy.caio.casadocodigo.cadastrarcliente;

import br.com.zupacademy.caio.casadocodigo.cadastrarestado.Estado;
import br.com.zupacademy.caio.casadocodigo.cadastrarpais.Pais;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializable;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JsonContent;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import java.util.EmptyStackException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class NovoClienteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private EntityManager manager;

    @Autowired
    private ObjectMapper objectMapper;

    private NovoClienteRequest novoClienteRequest;

    @BeforeEach
    public void setup() {
        Pais pais = new Pais("Brasil");
        manager.persist(pais);
        manager.persist(new Estado("Joao Pessoa", pais));

        this.novoClienteRequest = new NovoClienteRequest(
                "caio@gmail.com",
                "caio",
                "rodrigues",
                "45755411840",
                "rua maria batista rodrigues",
                "apto. 203",
                "Joao Pessoa",
                1L,
                1L,
                "83982152376",
                "05852770"
        );
    }

    @Test
    @Transactional
    public void deveCadastrarUmCliente() throws Exception {
        mockMvc.perform(post("/api/clientes")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(novoClienteRequest))
                ).andExpect(status().isCreated())
                .andExpect(content().contentType("application/json"))
                .andExpect(content().string("{\"id\":1,\"email\":\"caio@gmail.com\",\"nome\":\"caio\",\"sobrenome\":\"rodrigues\",\"documento\":\"45755411840\",\"endereco\":\"rua maria batista rodrigues\",\"complemento\":\"apto. 203\",\"cidade\":\"Joao Pessoa\",\"pais\":{\"id\":1,\"nome\":\"Brasil\"},\"estado\":{\"id\":1,\"nome\":\"Joao Pessoa\",\"pais\":{\"id\":1,\"nome\":\"Brasil\"}},\"telefone\":\"83982152376\",\"cep\":\"05852770\"}"));
    }

    @Test
    @Transactional
    public void naoDeveCadastrarClienteComCamposVazios() throws Exception {
        this.novoClienteRequest = new NovoClienteRequest(
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                1L,
                1L,
                "",
                ""
        );
        mockMvc.perform(post("/api/clientes")
                .contentType("application/json").content(objectMapper.writeValueAsString(novoClienteRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    @Transactional
    public void naoDeveCadastrarClienteComEstadoForaDeSeuPais() throws Exception{
        this.novoClienteRequest = new NovoClienteRequest(
                "caio@gmail.com",
                "caio",
                "rodrigues",
                "45755411840",
                "rua maria batista rodrigues",
                "apto. 203",
                "Joao Pessoa",
                1L,
                2L,
                "83982152376",
                "05852770"
        );

        mockMvc.perform(post("/api/clientes")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(this.novoClienteRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }
}