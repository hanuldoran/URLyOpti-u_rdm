package com.semperpi.urlyopti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.semperpi.urlyopti.entity.TblCd001Entity;
import com.semperpi.urlyopti.exception.RestException;
import com.semperpi.urlyopti.repository.TblCd001Repository;

@Service
public class TblCd001Service
{
    @Autowired
    private TblCd001Repository tblCd001Repository;

    public TblCd001Entity getBoard(Long boardId)
    {
        return tblCd001Repository.findById(boardId).orElseThrow(() -> 
                new RestException(HttpStatus.NOT_FOUND, "Not found board"));
    }

    public List<TblCd001Entity> getBoardListAll()
    {
        return tblCd001Repository.findAll();
    }
}
