import type {
  AttendanceAdtStatu,
  AttendanceList,
  AttendancePagingParams,
  CompanyVO,
  UpdateAttendanceParams,
  UpdateCompanyParams,
} from '@modules/attendance/types'
import { request } from '@utils/http/request'
class AttendanceService {
  static getAttendanceList(params: AttendancePagingParams) {
    return request.get<AttendanceList>('/attendances', { params })
  }

  static getCompanyList() {
    return request.get<CompanyVO[]>('/company/list')
  }

  static updateCompanyList(data: UpdateCompanyParams) {
    return request.put('/company/list', { data })
  }

  static updateAttendance(id: string, data: UpdateAttendanceParams) {
    return request.put(`/attendances/${id}`, { data })
  }

  static getAttendancesAdtStatuList(userId?: string) {
    return request.get<AttendanceAdtStatu[]>(`/attendances/adtStatu/list`, { params: { userId } })
  }
}

export default AttendanceService
