package com.example.api_user.security;

//Era JwtService, mas foi alterado para security/

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.lang.classfile.Signature;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

// Anotação @Component:
// - Indica que essa classe é um bean Spring e será gerenciada pelo contêiner de IoC.
// - Permite que o Spring injete essa classe em outros componentes ou serviços.
@Component
public class JwtTokenProvider {
    // Injeção da chave secreta usada para assinar o token JWT.
    // O valor é lido diretamente do arquivo application.properties pela anotação @Value.
    @Value("${jwt.secret}")
    private String secretKey;

    // Metodo para extrair o nome de usuário (subject) do token JWT.
    // Utiliza o metodo extractClaim para pegar a "claim" que contém o subject (nome de usuário).

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    /*Claims: informações do paylaod (partes do Jwt: header, >>payload<<, signature)
    Os claims são definidos pelo padrão JSON Web Token com nomes e significados predefinidos, como:
        iss: Emissor
        aud: Destinatário
        exp: Tempo de expiração
        nbf: Data de validade
        iat: Data de início de validade
        sub: Sujeito */

    //Metodo generico para extrair qualquer claim do token
    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        //Extrai todas as informações (claims) e aplica a função claimsResolver.
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Extrai todas as "claims" de um token JWT.
    // Esse metodo analisa o token, valida a assinatura com a chave secreta e retorna o corpo do JWT, que contém as claims.
    private Claims extractAllClaims(String token) {
        // Usa o parser do Jwts para decodificar e verificar o token JWT, validando a assinatura com a chave secreta.
        return Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token).getBody();
        //parser() depracated - trocar por parserBuilder(), adicionado .build() para parar de dar erro
    }

    private String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getUsername());
    }
    //Criar Token
    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt()
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*60*10))
                .signWith(SignatureAlgorithm.HS256, secretKey) //deprecated
                .compact();
    }
    //Verificar validade do token
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return(username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    //Verifica se token expirou com base no extractExpiration
    //Era private Date, troquei apra private boolean
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    //Extrai a data de expiração
    //Era private boolean, troquei para private Date
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

}
