package com.semperpi.urlyopti.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.semperpi.urlyopti.vo.TblCd001;
/**
 * 사용자의 요청을 받아서, 적절한 프로세스를 수행한 후 결과 Data를 응답<br>
 * 응답의 종류가 HTML 파일이라면 @Controller 어노테이션 사용
 * @author 샘퍼파이
 * @since 2020-01-01 00:00:00
 */
@RestController
public class URLyOptiController
{
    private static final Logger logger = LoggerFactory.getLogger( URLyOptiController.class );

    /**
     * 브라우저에서 URI 요청에 대해 텍스트 응답
     * @return String - 응답 텍스트
     */
    @GetMapping("/test/hello")
    public String hello()
    {
        logger.trace("hello SLF4J trace");
        logger.debug("hello SLF4J debug");
        logger.info("hello SLF4J info");
        logger.warn("hello SLF4J war");
        logger.error("hello SLF4J error");
        logger.debug("hello SLF4J TRACE, DEBUG, INFO, WAR, ERROR, ALL or OFF");
        return "<h1>hello SpringBoot2</h1>";
    }

    /**
     * http1.1 규약 중 데이터 Select 요청<br>
     * 브라우저에서 URL을 입력하여 발생하는 모든 요청은 Get<br>
     * Post, Put, Delete 요청을 하기 위해서는 프로그램밍을 해야 함<br>
     * Get 아닌 다른 요청을 테스트하기 위해 postman 같은 프로그램 사용
     * @return String - 반환 문자열
     */
    @GetMapping("/http/get")
    public String getTest()
    {
        return "get 요청";
    }

    /**
     * http1.1 규약 중 데이터 Select 요청<br>
     * RequestParam 어노테이션을 이용하여 Get 방식의 파라미터를 건별로 획득
     * @return String - 반환 문자열
     */
    @GetMapping("/http/get/req/param")
    public String getTest(@RequestParam String cdGrpId, @RequestParam String cdGrpNm)
    {
        return "get param 요청 : " + cdGrpId + ", " + cdGrpNm;
    }

    /**
     * http1.1 규약 중 데이터 Select 요청<br>
     * 파라미터를 객체 타입으로 받을 때는 RequestParam 어노테이션을 사용하지 않음
     * @return String - 반환 문자열
     */
    @GetMapping("/http/get/req/object")
    public String getTest(TblCd001 tblCd001)
    {
        return "get object 요청 : " + tblCd001.getCdGrpId() + ", " + tblCd001.getCdGrpNm();
    }

    /**
     * http1.1 규약 중 데이터 Insert 요청<br>
     * 브라우저에서 URL을 입력하여 발생하는 모든 요청은 Get<br>
     * PostMapping 어노테이션을 사용했으므로
     * 브라우저에서 http://도메인 혹은 IP:Port/http/post 를 입력하면
     * 405 에러(지원하지 않는 메소드)가 발생함
     * @return String - 반환 문자열
     */
    @PostMapping("/http/post")
    public String postTest()
    {
        return "post 요청";
    }

    /**
     * http1.1 규약 중 데이터 Insert 요청<br>
     * Post, Put, Delete 요청은 데이터를 Body에 실어서 보냄
     * Get 방식일 때 파라미터를 건별로 받으려면 RequestParam 어노테이션을 사용했으나
     * Body에 실려온 내용 전체를 하나의 문자열로 받을 때는 RequestBody 어노테이션을 사용
     * @return String - 반환 문자열
     */
    @PostMapping("/http/post/req/param")
    public String postTest(@RequestBody String text)
    {
        return "post 요청 : " + text;
    }

    /**
     * http1.1 규약 중 데이터 Insert 요청<br>
     * Post, Put, Delete 요청은 데이터를 Body에 실어서 보냄
     * Get 방식일 때 객체로 받을 때는 RequestParam 어노테이션을 사용하지 않았으나
     * Body에 실려온 JSON 데이터를 객체로 받을 때도 RequestBody 어노테이션을 사용<br>
     * JSON 데이터를 RequestBody 어노테이션을 사용한 객체로 받기 위해
     * 스프링부트에서는 MessageConverter가 변환 작업을 담당하고 있음
     * @return String - 반환 문자열
     */
    @PostMapping("/http/post/req/object")
    public String postTest(@RequestBody TblCd001 tblCd001)
    {
        return "post 요청 : " + tblCd001.getCdGrpId() + ", " + tblCd001.getCdGrpNm();
    }

    /**
     * http1.1 규약 중 데이터 Update 요청
     * 브라우저에서 URL을 입력하여 발생하는 모든 요청은 Get<br>
     * @PutMapping 어노테이션을 사용했으므로
     * 브라우저에서 http://도메인 혹은 IP:Port/http/put 를 입력하면
     * 405 에러(지원하지 않는 메소드)가 발생함
     * @return String - 반환 문자열
     */
    @PutMapping("/http/put")
    public String putTest()
    {
        return "put 요청";
    }

    /**
     * http1.1 규약 중 데이터 delete 요청
     * 브라우저에서 URL을 입력하여 발생하는 모든 요청은 Get<br>
     * @DeleteMapping 어노테이션을 사용했으므로
     * 브라우저에서 http://도메인 혹은 IP:Port/http/delete 를 입력하면
     * 405 에러(지원하지 않는 메소드)가 발생함
     * @return String - 반환 문자열
     */
    @DeleteMapping("/http/delete")
    public String deleteTest()
    {
        return "delete 요청";
    }
}
