import{test} from '@playwright/test';
import parseJson from '../data/parseJson.json';
// importing the json from file from parseJson file and we can directly access from json object
const url = 'https://www.demoblaze.com/index.html';
const url2 = 'https://testautomationpractice.blogspot.com/';

test.skip('login with valid user driven by json file', async ({ page }) => {
  await page.goto(url);
  await page.getByText('login2').click()
  await page.getByText('loginusernameID').fill(parseJson.username);
  await page.getByLabel('loginpassword').fill(parseJson.password);
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByText('Welcome')).toBeVisible();
});

test('fileUpload&Download',async({page},testInfo)=>{
    testInfo.annotations.push({
    type: 'info',
    description: 'Here I am checking multiple scenarios, upload sinle, multiple file and download single file'},
    { type: 'category', description: 'sanity' },
)
    await page.goto(url2);
    //select Single file
    await page.locator("//input[@id='singleFileInput']").setInputFiles("/Users/thiruvaludurg.chakr/Downloads/CertificateOfCompletion_BuddyProgramm.pdf");
    await page.getByRole('Button',{name:'Upload Single File'}).click()
    await page.waitForTimeout(3000);
    // Select mutiple files
     await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["/Users/thiruvaludurg.chakr/Downloads/CertificateOfCompletion_IYou.pdf","/Users/thiruvaludurg.chakr/Downloads/CertificateOfCompletion_ERE.pdf"]);
     await page.getByRole('Button',{name:'Upload Multiple Files'}).click()
     await page.waitForTimeout(3000);
    // download file
    await page.locator("//a[text()='Download Files']").click()
    const loadPromise = await page.waitForEvent('domcontentloaded');
    // const downloadPromise = await page.waitForEvent('download');
    await page.locator('#generatePdf').click();
    await page.locator('#pdfDownloadLink').waitFor({ state: 'visible' });
    const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#pdfDownloadLink')         
    ]);
    await download.saveAs('downloads/Testreport.pdf');

})
