/*------------------------------------------------------------------------------------------------*/
//ระบบเว็บไซต์สำเร็จรูป(CMS) เวอร์ชั่น 1.0 พัฒนาโดย:นายธีรพงศ์ พรหมวัง
//แก้ไขเนื้อหาเว็บไซต์ผ่าน GoogleSheet 
// <!-- =======================================================
// * Template Name: Arsha - v4.3.0
// * Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
// * Author: BootstrapMade.com
// * License: https://bootstrapmade.com/license/
// ======================================================== -->
/*----------------------------------------------------------------------------------*/
var id = "1sVVDut8dAcYV0zpNb8F5M4Gf4SsFXrZAkDJkTVwqgF0"
// editcss
const editcss = SpreadsheetApp.openById(id);
const css_edit = editcss.getSheetByName("css");
const css = editcss.getRange('B1').getDisplayValues()
/*-------------------------------------------------------------------------------*/

// header
const dataweb = SpreadsheetApp.openById(id);
const header = dataweb.getSheetByName("header");
const logo = header.getRange('B1').getValues()
const favIcon = header.getRange('B1').getValues()
const branner = header.getRange('B2').getValues()
const details1 = header.getRange('B3').getValues()
const details2 = header.getRange('B4').getValues()
const details3 = header.getRange('B5').getValues()
const textton2 = header.getRange('B6').getValues()
const linkbutton2 = header.getRange('C6').getValues()
const viewyoutube = header.getRange('B7').getValues()
const link_youtube = header.getRange('C7').getValues()

/*--------------------------------------------------------------------------*/


/**ส่วนของเมนู */
const menu = SpreadsheetApp.openById(id);
const setting = menu.getSheetByName("menu");
const home = setting.getRange('B1').getValues()
const about = setting.getRange('B2').getValues()
const services = setting.getRange('B3').getValues()
const portfolio = setting.getRange('B4').getValues()
const team = setting.getRange('B5').getValues()
const contact = setting.getRange('B6').getValues()
const buttontel = setting.getRange('B7').getValues()
const link_home = setting.getRange('C1').getValues()
const home_none = setting.getRange('D1').getValues()
const link_about = setting.getRange('C2').getValues()
const about_none = setting.getRange('D1').getValues()
const link_services = setting.getRange('C3').getValues()
const service_none = setting.getRange('D3').getValues()
const link_portfolio = setting.getRange('C4').getValues()
const portfoliomanu_none = setting.getRange('D4').getValues()
const link_team = setting.getRange('C5').getValues()
const teammanu_none = setting.getRange('D5').getValues()
const link_contact = setting.getRange('C6').getValues()
const link_contact_none = setting.getRange('D6').getValues()
const textbutton1 = setting.getRange('C7').getValues()
const textbutton1_none = setting.getRange('D7').getValues()

/*--------------------------------------------------------------------------------------*/


//Section1
const blog1 = SpreadsheetApp.openById(id);
const settingblog1 = blog1.getSheetByName("blog1");
const icon1 = settingblog1.getRange('B1').getValues()
const icon2 = settingblog1.getRange('B2').getValues()
const icon3 = settingblog1.getRange('B3').getValues()
const icon4 = settingblog1.getRange('B4').getValues()
const icon5 = settingblog1.getRange('B5').getValues()
const icon6 = settingblog1.getRange('B6').getValues()
const title1 = settingblog1.getRange('B7').getValues()
const lorem1 = settingblog1.getRange('B8').getValues()
const lorem1_1 = settingblog1.getRange('B9').getValues()
const lorem1_2 = settingblog1.getRange('B10').getValues()
const lorem1_3 = settingblog1.getRange('B11').getValues()
const lorem2 = settingblog1.getRange('B12').getValues()
const btnloremmore = settingblog1.getRange('B13').getValues()
const icon_none = settingblog1.getRange('B14').getValues()
const cliens_none = settingblog1.getRange('B15').getValues()


/*--------------------------------------------------------------------------------------*/

//Section2
const blog2 = SpreadsheetApp.openById(id);
const settingblog2 = blog2.getSheetByName("blog2");
const title2 = settingblog2.getRange('B1').getValues()
const title2_1 = settingblog2.getRange('B2').getValues()
const title2_3 = settingblog2.getRange('B3').getValues()
const textaccordion1 = settingblog2.getRange('B4').getValues()
const textaccordion1_1 = settingblog2.getRange('B5').getValues()
const textaccordion1_2 = settingblog2.getRange('B6').getValues()
const textaccordion2 = settingblog2.getRange('B7').getValues()
const textaccordion2_1 = settingblog2.getRange('B8').getValues()
const textaccordion2_2 = settingblog2.getRange('B9').getValues()
const textaccordion3 = settingblog2.getRange('B10').getValues()
const textaccordion3_1 = settingblog2.getRange('B11').getValues()
const textaccordion3_2 = settingblog2.getRange('B12').getValues()
const img_blog2 = settingblog2.getRange('B13').getValues()
const why_none = settingblog2.getRange('B14').getValues()


/*------------------------------------------------------------------------------------*/

//Section3
const blog3 = SpreadsheetApp.openById(id);
const settingblog3 = blog3.getSheetByName("blog3");
const img_blog3 = settingblog3.getRange('B1').getValues()
const title4 = settingblog3.getRange('B2').getValues()
const title4_1 = settingblog3.getRange('B3').getValues()
const texthtml = settingblog3.getRange('B4').getValues()
const html100_persen = settingblog3.getRange('B5').getValues()
const html100_persen_2 = settingblog3.getRange('C5').getDisplayValues()
const textcss = settingblog3.getRange('B6').getValues()
const css90_persen = settingblog3.getRange('B7').getValues()
const css90_persen_2 = settingblog3.getRange('C7').getDisplayValues()
const textjavascript = settingblog3.getRange('B8').getValues()
const javascript75_persen = settingblog3.getRange('B9').getValues()
const javascript75_persen_2 = settingblog3.getRange('C9').getDisplayValues()
const textphotoshop = settingblog3.getRange('B10').getValues()
const textphotoshop55_persen = settingblog3.getRange('B11').getValues()
const textphotoshop55_persen_2 = settingblog3.getRange('C11').getDisplayValues()
const skills_none = settingblog3.getRange('B12').getValues()
/*----------------------------------------------------------------------------------*/

//Section4
const blog4 = SpreadsheetApp.openById(id);
const settingblog4 = blog4.getSheetByName("blog4");
const text_services = settingblog4.getRange('B1').getValues()
const text4_1 = settingblog4.getRange('B2').getValues()

const card1_icon = settingblog4.getRange('B3').getValues()
const card1_title = settingblog4.getRange('C3').getValues()
const card1_linktitle = settingblog4.getRange('D3').getValues()
const card1_details = settingblog4.getRange('E3').getValues()

const card2_icon = settingblog4.getRange('B4').getValues()
const card2_title = settingblog4.getRange('C4').getValues()
const card2_linktitle = settingblog4.getRange('D4').getValues()
const card2_details = settingblog4.getRange('E4').getValues()

const card3_icon = settingblog4.getRange('B5').getValues()
const card3_title = settingblog4.getRange('C5').getValues()
const card3_linktitle = settingblog4.getRange('D5').getValues()
const card3_details = settingblog4.getRange('E5').getValues()

const card4_icon = settingblog4.getRange('B6').getValues()
const card4_title = settingblog4.getRange('C6').getValues()
const card4_linktitle = settingblog4.getRange('D6').getValues()
const card4_details = settingblog4.getRange('E6').getValues()
const services_none = settingblog4.getRange('B7').getValues()

/*---------------------------------------------------------------------------------------------*/

//Section5
const blog5 = SpreadsheetApp.openById(id);
const settingblog5 = blog5.getSheetByName("blog5");
const textcallaction = settingblog5.getRange('B1').getValues()
const div_text = settingblog5.getRange('B2').getValues()
const div_button = settingblog5.getRange('B3').getValues()
const text_button = settingblog5.getRange('C3').getValues()
const link_button = settingblog5.getRange('D3').getValues()
const bg_style = settingblog5.getRange('E3').getValues()
const div_button_none = settingblog5.getRange('B4').getValues()
const div_none = settingblog5.getRange('B5').getValues()



/*----------------------------------------------------------------------------------------------*/

//Section6
const blog6 = SpreadsheetApp.openById(id);
const settingblog6 = blog6.getSheetByName("blog6");
const title_text = settingblog6.getRange('B1').getValues()
const details_text6 = settingblog6.getRange('B2').getValues()
const button_all = settingblog6.getRange('B3').getValues()
const button_app = settingblog6.getRange('B4').getValues()
const button_card = settingblog6.getRange('B5').getValues()
const button_web = settingblog6.getRange('B6').getValues()
const portfolio_none = settingblog6.getRange('B16').getValues()

//App1
const portfolio_img1 = settingblog6.getRange('B7').getValues()
const portfolio_text1 = settingblog6.getRange('C7').getValues()
const portfolio_text2 = settingblog6.getRange('D7').getValues()
const portfolio_link_1 = settingblog6.getRange('E7').getValues()
const moredetails_title = settingblog6.getRange('F7').getValues()

//App2
const portfolio_img2 = settingblog6.getRange('B8').getValues()
const portfolio_text1_2 = settingblog6.getRange('C8').getValues()
const portfolio_text2_2 = settingblog6.getRange('D8').getValues()
const portfolio_link_2 = settingblog6.getRange('E8').getValues()

////App3
const portfolio_img3 = settingblog6.getRange('B9').getValues()
const portfolio_text1_3 = settingblog6.getRange('C9').getValues()
const portfolio_text2_3 = settingblog6.getRange('D9').getValues()
const portfolio_link_3 = settingblog6.getRange('E9').getValues()

//Card1
const portfolio_img4 = settingblog6.getRange('B10').getValues()
const portfolio_text1_4 = settingblog6.getRange('C10').getValues()
const portfolio_text2_4 = settingblog6.getRange('D10').getValues()
const portfolio_link_4 = settingblog6.getRange('E10').getValues()

//Card2
const portfolio_img5 = settingblog6.getRange('B11').getValues()
const portfolio_text1_5 = settingblog6.getRange('C11').getValues()
const portfolio_text2_5 = settingblog6.getRange('D11').getValues()
const portfolio_link_5 = settingblog6.getRange('E11').getValues()

//Card3
const portfolio_img6 = settingblog6.getRange('B12').getValues()
const portfolio_text1_6 = settingblog6.getRange('C12').getValues()
const portfolio_text2_6 = settingblog6.getRange('D12').getValues()
const portfolio_link_6 = settingblog6.getRange('E12').getValues()

//Web1
const portfolio_img7 = settingblog6.getRange('B13').getValues()
const portfolio_text1_7 = settingblog6.getRange('C13').getValues()
const portfolio_text2_7 = settingblog6.getRange('D13').getValues()
const portfolio_link_7 = settingblog6.getRange('E13').getValues()

//Web2
const portfolio_img8 = settingblog6.getRange('B14').getValues()
const portfolio_text1_8 = settingblog6.getRange('C14').getValues()
const portfolio_text2_8 = settingblog6.getRange('D14').getValues()
const portfolio_link_8 = settingblog6.getRange('E14').getValues()

//Web3
const portfolio_img9 = settingblog6.getRange('B15').getValues()
const portfolio_text1_9 = settingblog6.getRange('C15').getValues()
const portfolio_text2_9 = settingblog6.getRange('D15').getValues()
const portfolio_link_9 = settingblog6.getRange('E15').getValues()


/*--------------------------------------------------------------------------------------------*/
//Section7
const blog7 = SpreadsheetApp.openById(id);
const settingblog7 = blog7.getSheetByName("blog7");
const team_title_1 = settingblog7.getRange('B1').getValues()
const team_details_1 = settingblog7.getRange('B2').getValues()
const name_title_1 = settingblog7.getRange('B3').getValues()
const ink_img_1 = settingblog7.getRange('C3').getValues()
const title_job_1 = settingblog7.getRange('D3').getValues()
const dept_1 = settingblog7.getRange('D3').getValues()
const detail_1 = settingblog7.getRange('E3').getValues()
const twitter_iconlink_1 = settingblog7.getRange('F3').getValues()
const facebook_iconlink_1 = settingblog7.getRange('G3').getValues()
const instagram_iconlink_1 = settingblog7.getRange('H3').getValues()
const line_iconlink_1 = settingblog7.getRange('I3').getValues()

const name_title_2 = settingblog7.getRange('B4').getValues()
const ink_img_2 = settingblog7.getRange('C4').getValues()
const title_job_2 = settingblog7.getRange('D4').getValues()
const dept_2 = settingblog7.getRange('D4').getValues()
const detail_2 = settingblog7.getRange('E4').getValues()
const twitter_iconlink_2 = settingblog7.getRange('F4').getValues()
const facebook_iconlink_2 = settingblog7.getRange('G4').getValues()
const instagram_iconlink_2 = settingblog7.getRange('H4').getValues()
const line_iconlink_2 = settingblog7.getRange('I4').getValues()

const name_title_3 = settingblog7.getRange('B5').getValues()
const ink_img_3 = settingblog7.getRange('C5').getValues()
const title_job_3 = settingblog7.getRange('D5').getValues()
const dept_3 = settingblog7.getRange('D5').getValues()
const detail_3 = settingblog7.getRange('E5').getValues()
const twitter_iconlink_3 = settingblog7.getRange('F5').getValues()
const facebook_iconlink_3 = settingblog7.getRange('G5').getValues()
const instagram_iconlink_3 = settingblog7.getRange('H5').getValues()
const line_iconlink_3 = settingblog7.getRange('I5').getValues()

const name_title_4 = settingblog7.getRange('B6').getValues()
const ink_img_4 = settingblog7.getRange('C6').getValues()
const title_job_4 = settingblog7.getRange('D6').getValues()
const dept_4 = settingblog7.getRange('D6').getValues()
const detail_4 = settingblog7.getRange('E6').getValues()
const twitter_iconlink_4 = settingblog7.getRange('F6').getValues()
const facebook_iconlink_4 = settingblog7.getRange('G6').getValues()
const instagram_iconlink_4 = settingblog7.getRange('H6').getValues()
const line_iconlink_4 = settingblog7.getRange('I6').getValues()
const team_none = settingblog5.getRange('B5').getValues()

/*--------------------------------------------------------------------------------------------*/


//Section8
const blog8 = SpreadsheetApp.openById(id);
const pricing_blog = blog8.getSheetByName("blog8");
const pricing_title = pricing_blog.getRange('B1').getValues()
const pricing_detail = pricing_blog.getRange('B2').getValues()
const pricing_freeplan = pricing_blog.getRange('B3').getValues()
const pricing_currency= pricing_blog.getRange('B4').getValues()
const pricing_price= pricing_blog.getRange('B5').getDisplayValue()
const pricing_permonth= pricing_blog.getRange('B6').getValues()
const pricing_details1= pricing_blog.getRange('B7').getValues()
const pricing_details2= pricing_blog.getRange('B8').getValues()
const pricing_details3= pricing_blog.getRange('B9').getValues()
const pricing_details4= pricing_blog.getRange('B10').getValues()
const pricing_details5= pricing_blog.getRange('B11').getValues()
const pricing_buynowbutton1= pricing_blog.getRange('B12').getValues()
const pricing_buynowlink = pricing_blog.getRange('B13').getValues()
const pricing_displaynone = pricing_blog.getRange('B14').getValues()


const pricing_businessplan = pricing_blog.getRange('C3').getValues() 
const pricing_currency_2 = pricing_blog.getRange('C4').getValues()
const pricing_price_2 = pricing_blog.getRange('C5').getDisplayValues()
const pricing_permonth_2 = pricing_blog.getRange('C6').getValues()
const pricing_details1_2= pricing_blog.getRange('C7').getValues()
const pricing_details2_2= pricing_blog.getRange('C8').getValues()
const pricing_details3_2= pricing_blog.getRange('C9').getValues()
const pricing_details4_2= pricing_blog.getRange('C10').getValues()
const pricing_details5_2= pricing_blog.getRange('C11').getValues()
const pricing_buynowbutton1_2= pricing_blog.getRange('C12').getValues()
const pricing_buynowlink_2 = pricing_blog.getRange('C13').getValues()

const pricing_developerplan = pricing_blog.getRange('D3').getValues() 
const pricing_currency_3 = pricing_blog.getRange('D4').getValues()
const pricing_price_3 = pricing_blog.getRange('D5').getDisplayValues()
const pricing_permonth_3 = pricing_blog.getRange('D6').getValues()
const pricing_details1_3= pricing_blog.getRange('D7').getValues()
const pricing_details2_3= pricing_blog.getRange('D8').getValues()
const pricing_details3_3= pricing_blog.getRange('D9').getValues()
const pricing_details4_3= pricing_blog.getRange('D10').getValues()
const pricing_details5_3= pricing_blog.getRange('D11').getValues()
const pricing_buynowbutton1_3= pricing_blog.getRange('D12').getValues()
const pricing_buynowlink_3 = pricing_blog.getRange('D13').getValues()

/*--------------------------------------------------------------------------------------------*/


//Section9
const blog9 = SpreadsheetApp.openById(id);
const questions_blog = blog9.getSheetByName("blog9");
const questions_title = questions_blog.getRange('B1').getValues()
const questions_details = questions_blog.getRange('B2').getValues()
const accordions_title = questions_blog.getRange('B3').getValues()
const accordions_details = questions_blog.getRange('C3').getValues()
const accordions_title_2 = questions_blog.getRange('B4').getValues()
const accordions_details_2 = questions_blog.getRange('C4').getValues()
const accordions_title_3 = questions_blog.getRange('B5').getValues()
const accordions_details_3 = questions_blog.getRange('C5').getValues()
const accordions_title_4 = questions_blog.getRange('B6').getValues()
const accordions_details_4 = questions_blog.getRange('C6').getValues()
const accordions_title_5 = questions_blog.getRange('B7').getValues()
const accordions_details_5 = questions_blog.getRange('C7').getValues()
const accordions_displaynone = questions_blog.getRange('B8').getValues()

/*--------------------------------------------------------------------------------------------*/


//Section10
const blog10 = SpreadsheetApp.openById(id);
const contact_blog = blog10.getSheetByName("blog10");
const contact_title = contact_blog.getRange('B1').getValues()
const contact_details = contact_blog.getRange('B2').getValues()
const contact_location = contact_blog.getRange('B3').getValues()
const contact_address = contact_blog.getRange('C3').getValues()
const contact_email_title = contact_blog.getRange('B4').getValues()
const contact_email= contact_blog.getRange('C4').getValues()
const contact_call = contact_blog.getRange('B5').getValues()
const contact_callnumber = contact_blog.getRange('C5').getValues()
const contact_map = contact_blog.getRange('B6').getValues()
const contact_yourname = contact_blog.getRange('B7').getValues()
const contact_youremail = contact_blog.getRange('B8').getValues()
const contact_subject = contact_blog.getRange('B9').getValues()
const contact_message = contact_blog.getRange('B10').getValues()
const contact_buttonsendmessage = contact_blog.getRange('B11').getValues()
const contact_buttonspinner= contact_blog.getRange('C11').getValues()
const contact_displaynone = contact_blog.getRange('B12').getValues()
const contact_tokenid = contact_blog.getRange('D2').getValues()  

/*--------------------------------------------------------------------------------------------*/

//Section11
const blog11 = SpreadsheetApp.openById(id);
const newsletter_blog = blog11.getSheetByName("blog11");
const newsletter_title = newsletter_blog.getRange('B1').getValues()
const newsletter_details= newsletter_blog.getRange('B2').getValues()
const subscribe= newsletter_blog.getRange('B3').getValues()
const subscribe_displaynone= newsletter_blog.getRange('B4').getValues()

/*--------------------------------------------------------------------------------------------*/

//Section12
const blog12 = SpreadsheetApp.openById(id);
const footer_blog = blog12.getSheetByName("blog12");
const company_name = footer_blog.getRange('B1').getValues()
const company_address = footer_blog.getRange('B2').getValues()


const usefulinks = footer_blog.getRange('A3').getValues()
const usefulinks_2 = footer_blog.getRange('B3').getValues()
const usefulinks_3 = footer_blog.getRange('B4').getValues()
const usefulinks_4 = footer_blog.getRange('B5').getValues()
const usefulinks_5 = footer_blog.getRange('B6').getValues()
const usefulinks_6 = footer_blog.getRange('B7').getValues()

const usefulinks_2_1 = footer_blog.getRange('C3').getValues()
const usefulinks_3_1 = footer_blog.getRange('C4').getValues()
const usefulinks_4_1 = footer_blog.getRange('C5').getValues()
const usefulinks_5_1 = footer_blog.getRange('C6').getValues()
const usefulinks_6_1 = footer_blog.getRange('C7').getValues()

/*--------------------------------------------------------------------------------------------*/
const ourservices = footer_blog.getRange('A8').getValues()
const ourservices_2 = footer_blog.getRange('B8').getValues()
const ourservices_3 = footer_blog.getRange('B9').getValues()
const ourservices_4 = footer_blog.getRange('B10').getValues()
const ourservices_5 = footer_blog.getRange('B11').getValues()
const ourservices_6 = footer_blog.getRange('B12').getValues()

const ourservices_2_1 = footer_blog.getRange('C8').getValues()
const ourservices_3_1 = footer_blog.getRange('C9').getValues()
const ourservices_4_1 = footer_blog.getRange('C10').getValues()
const ourservices_5_1 = footer_blog.getRange('C11').getValues()
const ourservices_6_1 = footer_blog.getRange('C12').getValues()

const oursocial = footer_blog.getRange('B13').getValues()
const oursocial_detail = footer_blog.getRange('C13').getValues()

const twitter_link = footer_blog.getRange('C14').getValues()
const facebook_link = footer_blog.getRange('C15').getValues()
const instagram_link = footer_blog.getRange('C16').getValues()
const youtube_link = footer_blog.getRange('C17').getValues()

const twitter_icon = footer_blog.getRange('D14').getValues()
const facebook_icon = footer_blog.getRange('D15').getValues()
const instagram_icon = footer_blog.getRange('D16').getValues()
const youtube_icon = footer_blog.getRange('D17').getValues()
const developpername = footer_blog.getRange('B18').getValues()
const footer_displaynone = footer_blog.getRange('B19').getValues()
/*--------------------------------------------------------------------------------------------*/

//Section13 css
const css_color = SpreadsheetApp.openById(id);
const css_color1 = css_color.getSheetByName("css_color");
const color_button = css_color1.getRange('B1').getValues()

/*--------------------------------------------------------------------------------------------*/
