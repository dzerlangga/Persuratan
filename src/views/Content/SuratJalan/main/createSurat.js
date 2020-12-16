import React from 'react';
import { 
    CCard,
    CCardHeader,
    CCardBody,
    CForm,
    CRow,
    CFormGroup,
    CLabel,
    CInput,
    CTextarea,
    CButton
} from '@coreui/react';

  
const createRekap = () => {
  function clicksimpan() {
    document.getElementById('simpan').click()
  }
    return(
        <CCard>
              <CCardHeader>
                Buat Surat Jalan
                <div className="card-header-actions sizeoye-880">
                      <CButton type="Buat" size="xl" className="float-right" color="primary" onClick={clicksimpan}>Buat</CButton>
                </div>
              </CCardHeader>
              <CCardBody>
                <CForm  >
                  <CRow>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="dari">Penulis</CLabel>
                      <CInput type="text" id="dari" name="dari" readOnly style={{ pointerEvents:'none' ,color:'orange'}} value="Deni Romansyah"/>
                    </CFormGroup>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="kepada">Kepada</CLabel>
                      <CInput type="text" id="kepada" name="kepada" />
                    </CFormGroup>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="noSurat">No Surat</CLabel>
                      <CInput type="text" id="noSurat" name="noSurat" placeholder="20/SRTJLN01/11" />
                    </CFormGroup>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="barangId">Barang</CLabel>
                      <CInput type="text" id="barangId" name="barangId" />
                    </CFormGroup>

                    <CFormGroup className="col-sm-12">
                      <CLabel htmlFor="ket">Keterangan</CLabel>
                      <CTextarea name="ket" id="ket" rows="6" />
                    </CFormGroup>

                    <CFormGroup className="col-sm-12 d-none">
                      <CButton type="Buat" size="xl" className="col-sm-12" id="simpan" onClick={()=>alert('berhasil di simpan')} color="primary">Buat</CButton>
                    </CFormGroup>

                  </CRow>
                </CForm>
              </CCardBody>
        </CCard>
    )
}

export default createRekap;