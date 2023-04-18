package com.semperpi.urlyopti.vo;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TblCd001
{
    private String cdGrpId;
    private String cdGrpNm;

    @Builder
    public TblCd001( String cdGrpId, String cdGrpNm )
    {
        this.cdGrpId = cdGrpId;
        this.cdGrpNm = cdGrpNm;
    }
    
    public static void main(String[] args)
    {
        TblCd001 tblCd001 = new TblCd001();
        
//        tblCd001.builder().cdGrpId("1234").cdGrpNm("이름이지요");
    }
}
