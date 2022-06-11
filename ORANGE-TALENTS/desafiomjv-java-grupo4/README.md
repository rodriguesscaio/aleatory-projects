   # Explorando princípais Classes da linguagem java <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a>
<div style="display: inline_block">
Segundo exercício em grupo do <img  align="center" alt="html5" src="https://img.shields.io/static/v1?label=DevSchool&message=MJV&color=blueviolet"/>  <a href="https://www.java.com" target="_blank"> 
  
  #### Autores 
- [Evelyn Carolina ](https://github.com/evelyncarolina)
- [Dominic Lourenço Barbosa ](https://github.com/DomBarbosa8)
- [Joana Silva ](https://github.com/Joana-Silvas)
- [Lucca Bugatti ](https://github.com/luccabugatti)
- [Mayara Saavedra ](https://github.com/maysaavedra)
- [Patricia Ferreira de Sousa ](https://github.com/paty127)
- [Tatiane Pimenta Leal ](https://github.com/TatianePimentaLeal)
- [Wagner dos Santos ](https://github.com/wbatista985)

 
## Requisitos
1. Realizar uma breve descrição da classe em questão;
2. Apresentar alternativas de instanciação de objetos com construtor ou metódos singleton;
3. Apresentar no mínimo 04 métodos mais utilizados destacando o seu contrato (tipo retorno + nome + parâmetros);
4. Apresentar se alguns dos métodos é sobrecarregado;
5. Realizar uma demonstração adaptando o uso dos métodos (mínimo 04) em situações do cotidiando (use a imaginação);
  
 ## Descrição Classes Java.
  
- java.util.Formatter
- java.time.format.DateTimeFormatter
- java.text.DecimalFormat  
 
 ## java.util.Formatter 
   * **_Descrição:_** Um intérprete para strings de formato no estilo printf. Esta classe fornece suporte para justificação e alinhamento de layout, formatos comuns para dados numéricos, de string e de data / hora e saída específica de local. Tipos Java comum, como byte, BigDecimal, e Calendar são suportados. A personalização de formatação limitada para tipos de usuários arbitrários é fornecida por meio da Formattableinterface.<br><br>
Os formatadores não são necessariamente seguros para acesso multithread. A segurança de thread é opcional e é de responsabilidade dos usuários dos métodos desta classe.
A impressão formatada para a linguagem Java é fortemente inspirada em C's printf. Embora as strings de formato sejam semelhantes a C, algumas personalizações foram feitas para     acomodar a linguagem Java e explorar alguns de seus recursos. Além disso, a formatação Java é mais restrita do que a C; por exemplo, se uma conversão for incompatível com um       sinalizador, uma exceção será lançada. Em C, os sinalizadores inaplicáveis são silenciosamente ignorados. As strings de formato devem, portanto, ser reconhecidas por               programadores C, mas não necessariamente totalmente compatíveis com aqueles em C.

 Exemplos de uso esperado:
   
   ````
   
     StringBuilder sb = new StringBuilder ();
   // Envia todas as saídas para o objeto Appendable sb
   Formatter formatter = novo Formatter (sb, Locale.US);

   // Índices de argumentos explícitos podem ser usados para reordenar a saída.
   formatter.format ("% 4 $ 2s% 3 $ 2s% 2 $ 2s% 1 $ 2s", "a", "b", "c", "d")
   // -> "dcb a"

   // localidade opcional como o primeiro argumento pode ser usado para obter
   // formatação de números específica da localidade. A precisão e largura podem ser
   // dado para arredondar e alinhar o valor.
   formatter.format (Locale.FRANCE, "e =% + 10.4f", Math.E);
   // -> "e = +2,7183"

   // O sinalizador numérico '(' pode ser usado para formatar números negativos com
   // parênteses em vez de um sinal de menos. Os separadores de grupo são
   // inserido automaticamente.
   formatter.format ("Montante ganho ou perdido desde a última declaração: $% (,. 2f",
                    balanceDelta);
   // -> "Montante ganho ou perdido desde a última declaração: $ (6.217,58)"
   
   
   ````
  Veja mais sobre a documentação da Classe java (java.util.Formatter) no próprio site da Oracle, pelo link:
   https://docs.oracle.com/javase/7/docs/api/java/util/Formatter.html
   
   ## java.time.format.DateTimeFormatter
   
   Formatador para impressão e análise de objetos de data e hora.
Esta classe fornece o principal ponto de entrada do aplicativo para impressão e análise e fornece implementações comuns de DateTimeFormatter:

   - Usando constantes predefinidas, como ISO_LOCAL_DATE
   - Usando letras padrão, como uuuu-MMM-dd
   - Usando estilos localizados, como longoumedium
Formatadores mais complexos são fornecidos por DateTimeFormatterBuilder.

As principais classes de data e hora fornecem dois métodos - um para formatação format(DateTimeFormatter formatter), e outro para análise parse(CharSequence text, DateTimeFormatter formatter),.

Por exemplo:

  Data LocalDate = LocalDate.now ();
  String text = date.format (formatter);
  LocalDate parsedDate = LocalDate.parse (texto, formatador);
 
Além do formato, os formatadores podem ser criados com Locale, Chronology, ZoneId e DecimalStyle desejados.

O `withLocale` método retorna um novo formatador que substitui o local. A localidade afeta alguns aspectos de formatação e análise. Por exemplo, o ofLocalizedDatefornece um formatador que usa o formato de data específico do local.

O `withChronology` método retorna um novo formatador que substitui a cronologia. Se substituído, o valor de data e hora é convertido para a cronologia antes da formatação. Durante a análise, o valor de data e hora é convertido para a cronologia antes de ser retornado.

O `withZone` método retorna um novo formatador que substitui a zona. Se substituído, o valor de data e hora é convertido em um ZonedDateTime com o ZoneId solicitado antes da formatação. Durante a análise, o ZoneId é aplicado antes que o valor seja retornado.

O `withDecimalStyle` método retorna um novo formatador que substitui o DecimalStyle. Os símbolos DecimalStyle são usados para formatação e análise.

Alguns aplicativos podem precisar usar a java.text.Format classe mais antiga para formatação. O toFormat()método retorna uma implementação de java.text.Format.

### Formatadores Predefinidos  
   <div style="display: inline_block"><br/>
<img  align="center" alt="" src="https://i.imgur.com/9KoMjNE.png"/>
</div><br/>
   
  * **_Padrões para formatação e análise_**
   
Os padrões são baseados em uma sequência simples de letras e símbolos. Um padrão é usado para criar um Formatador usando os métodos ofPattern(String)e ofPattern(String, Locale). Por exemplo, "d MMM uuuu"formatará 03-12-2011 como '3 de dezembro de 2011'. Um formatador criado a partir de um padrão pode ser usado quantas vezes forem necessárias, é imutável e seguro para threads.
Por exemplo:

```
  Data LocalDate = LocalDate.now ();
  DateTimeFormatter formatter = DateTimeFormatter.ofPattern ("aaaa MM dd");
  String text = date.format (formatter);
  LocalDate parsedDate = LocalDate.parse (texto, formatador);
   
```
  Veja mais sobre a documentação da Classe java (java.time.format.DateTimeFormatter) no próprio site da Oracle, pelo link:
  https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html

   ## java.text.DecimalFormat
  
  A classe DecimalFormat também faz parte do pacote java.text e permite formatar números reais, porém uma particularidade é que ela permite que seja informado o a forma a ser formatado o valor. Você pode usar a classe DecimalFormat para formatar números decimais em seqüências específicas para a localidade. Esta classe permite-lhe controlar a exibição da esquerda e à quantidade de zeros à direita, prefixos e sufixos, agrupando (milhares) separadores, e o separador decimal. Se você quer mudar símbolos de formatação, tais como separador decimal, você pode usar os DecimalFormatSymbols em conjunto com a classe DecimalFormat. Essas classes oferecem uma grande flexibilidade na formatação de números, mas eles podem fazer seu código mais complexo.

Você especifica as propriedades de formatação de DecimalFormat com uma cadeia de caracteres padrão. O padrão determina o que o número formatado parece.

Para entender como formatar, analise os caracteres e descrições dos simbolos:
  
  - (0) Um dígito, caso não esteja presente adiciona 0
  - (#) Um dígito, de zero mostra como ausente
  - (.) Espaço reservado para separador decimal
  - (,) Espaço reservado para o agrupamento separador
  
Estes são os símbolos mais utilizados. 
Existem outros símbolos que não estão na lista mas podem ser entendidos no próprio site da oracle, pelo link:              https://docs.oracle.com/javase/tutorial/i18n/format/decimalFormat.html

Para criar o mesmo exemplo mostrado com NumberFormat, observe o código a seguir:
  
  ```
  import java.text.DecimalFormat;

  String valorFormatado = new DecimalFormat("#,##0.00").format(12005.11);
  System.out.println( valorFormatado );
  
  ```
  A saída será: 12.005,11
  
  Entendemos que a classe DecimalFormat permite formatar valores em diferentes padrões, dessa forma existe uma maior liberdade. 
  O exemplo mostrado, cria um objeto DecimalFormat para a localidade padrão.
  Se você quer um objeto DecimalFormat para outro local, precisa instanciar um NumberFormat e depois lançá-lo para DecimalFormat.
  Aqui está um exemplo:
  
  ```
  NumberFormat nf = NumberFormat.getNumberInstance(loc);
  DecimalFormat df = (DecimalFormat)nf;
  df.applyPattern(pattern);
  String output = df.format(value);
  System.out.println(pattern + " " + output + " " + loc.toString());
  
  ```
  
  O resultado pode mostrar variação de acordo com a localidade, ou seja para cada localidade pode ter diferentes saídas:
  
      - ##,###.###  = 123,456.789 en_US
      - ###,###.### = 123.456,789 de_DE
      - ###,###.### = 123 456,789 fr_FR

 Veja mais sobre a documentação da Classe java (java.text.DecimalFormat) no próprio site da Oracle, pelo link:
  https://docs.oracle.com/javase/7/docs/api/java/text/DecimalFormat.html
  

