export class User {
  Avatar: any;
  AvatarColor: string;
  Email: string;
  FullName: string;
  IsEditPermission: number;
  JobPositionName: string | null;
  MISAIDEmail: string;
  MisaCode: string;
  Mobile: string | null;
  ModifiedDate: string;
  OrganizationUnitID: string;
  OrganizationUnitName: string;
  RoleCode: string;
  RoleName: string;
  Status: number;
  TenantID: string;
  UserID: string;

  constructor(Avatar: any, AvatarColor: string, Email: string, FullName: string, IsEditPermission: number, JobPositionName: string, MISAIDEmail: string, MisaCode: string, Mobile: string, ModifiedDate: string, OrganizationUnitID: string, OrganizationUnitName: string, RoleCode: string, RoleName: string, Status: number, TenantID: string, UserID: string) {
    this.Avatar = Avatar;
    this.AvatarColor = AvatarColor;
    this.Email = Email;
    this.FullName = FullName;
    this.IsEditPermission = IsEditPermission;
    this.JobPositionName = JobPositionName;
    this.MISAIDEmail = MISAIDEmail;
    this.MisaCode = MisaCode;
    this.Mobile = Mobile;
    this.ModifiedDate = ModifiedDate;
    this.OrganizationUnitID = OrganizationUnitID;
    this.OrganizationUnitName = OrganizationUnitName;
    this.RoleCode = RoleCode;
    this.RoleName = RoleName;
    this.Status = Status;
    this.TenantID = TenantID;
    this.UserID = UserID;
  }
}
