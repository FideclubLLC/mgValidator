import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { CouponService } from "./coupon.service";

@Controller("coupon")
export class CouponController {
  constructor(private couponService: CouponService) {}

  @Get(":id")
  async getCoupon(@Param("id") id) {
    const data = await this.couponService.getCoupon(id);
    return data;
  }
  @Get("/validate/:id/:companyId")
  async validateCoupon(@Param("id") id, @Param("companyId") companyId) {
    console.log("ID IS", id + " company is ", companyId);
    const data = await this.couponService.validateCoupon(id, companyId);
    return data;
  }
  @Get("/redeem/:id")
  async redeemCoupon(@Param("id") id) {
    const data = await this.couponService.redeemCoupon(id);
    return data;
  }
  @Get("/test/:userId")
  async getUserEmail(@Param("userId") userId) {
    const data = await this.couponService.getCompanyEmail(userId);
    return data;
  }
  @Post("redeem/:id/")
  async redeemConfirmation(@Param("id") id, @Body("companyId") companyId) {
    const data = await this.couponService.redeemConfirmation(id, companyId);
    return data;
  }
  @Post("login/test")
  async passwordTest(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    return await this.couponService.login(email, password);
  }
}
