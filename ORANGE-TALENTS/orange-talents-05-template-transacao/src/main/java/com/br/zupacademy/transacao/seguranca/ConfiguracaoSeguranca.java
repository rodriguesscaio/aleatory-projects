//package com.br.zupacademy.transacao.seguranca;
//
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
//
//public class ConfiguracaoSeguranca extends WebSecurityConfigurerAdapter {
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.authorizeRequests(authorizeRequests -> authorizeRequests
//						.anyRequest().permitAll());
////						.anyRequest().authenticated());
////				.oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt);
//	}
//}
