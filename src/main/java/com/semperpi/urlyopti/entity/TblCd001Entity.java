package com.semperpi.urlyopti.entity;

import java.sql.Timestamp;

import org.hibernate.annotations.Comment;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(
    name = "tbl_cd_001"
  , indexes = {
        @Index(name = "idx_cd_001_a", columnList = "cdGrpId", unique = true)
      , @Index(name = "idx_cd_001_b", columnList = "uprCdId")
    }
)
@Comment("특정 정보를 나타내기 위한 분류의 정보") 
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TblCd001Entity
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Comment("아이디")
    private Long id;

    @Column(length=8)
    @Comment("코드그룹아이디")
    private String cdGrpId;

    @Column(length=100)
    @Comment("코드그룹명")
    private String cdGrpNm;

    @Column(length=8)
    @Comment("상위코드아이디")
    private String uprCdId;

    @Comment("등록일시")
    private Timestamp rgsDt;

    @Column(length=12)
    @Comment("등록자")
    private String rgsPp;

    @Column(length=300)
    @Comment("변경사유")
    private String chgRsn;

    @Comment("최종변경일시")
    private Timestamp lstChgDt;

    @Column(length=12)
    @Comment("최종변경자")
    private String lstChgPp;
}
