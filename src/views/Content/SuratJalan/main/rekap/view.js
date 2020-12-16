import React ,{ useEffect,useState } from 'react';
import { 
    CCardHeader,
    CCardBody,
    CButton,
    CForm,
    CRow,
    CFormGroup,
    CLabel,
    CInput,
    CTextarea
} from '@coreui/react';

  const View = (props) => {
      console.log(props);
    const { setView, viewData, data, setData} = props
    return(
      <>
              <CCardHeader>
                View Rekap
                <div className="card-header-actions">
                      <CButton type="Buat" size="xl" className="float-right" color="primary" onClick={()=>setView(!viewData)} >Back</CButton>
                </div>
              </CCardHeader>
              <CCardBody>
                <CForm  >
                  <CRow>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="dari">Penulis</CLabel>
                      <CInput type="text" id="dari" name="dari" readOnly style={{ pointerEvents:'none' ,color:'orange'}} value={data.dari} />
                    </CFormGroup>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="kepada">Kepada</CLabel>
                      <CInput type="text" id="kepada" name="kepada" value={data.kepada} />
                    </CFormGroup>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="tanggal">Tanggal</CLabel>
                      <CInput type="date" id="tanggal" name="tanggal" value={data.tanggal}/>
                    </CFormGroup>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="noSurat">No Surat</CLabel>
                      <CInput type="text" id="noSurat" name="noSurat" placeholder="20/SRTJLN01/11" value={data.noSurat}/>
                    </CFormGroup>

                    <CFormGroup className="col-sm-12">
                      <CLabel htmlFor="barangId">Barang</CLabel>
                      <CInput type="text" id="barangId" name="barangId" />
                    </CFormGroup>

                    <CFormGroup className="col-sm-12">
                      <CLabel htmlFor="ket">Keterangan</CLabel>
                      <CTextarea name="ket" id="ket" rows="6"value={data.ket} />
                    </CFormGroup>

                    <CFormGroup className="col-sm-12 d-none">
                      <CButton type="Buat" size="xl" className="col-sm-12" id="simpan" color="primary">Buat</CButton>
                    </CFormGroup>

                  </CRow>
                </CForm>
              </CCardBody>
        </>
        )
      }
      
export default View;