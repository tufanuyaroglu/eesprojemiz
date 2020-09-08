import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable as GlobalVariable

WebUI.waitForElementClickable(findTestObject("Object Repository/Olusturma/Genel/AliciSecilir/Alici_Image"), 10)

WebUI.click(findTestObject("Object Repository/Olusturma/Genel/AliciSecilir/Alici_Image"))

WebUI.switchToFrame(findTestObject("Object Repository/Sayfalar/Yetki_Yonetimi/Departman_Bilgileri/frame"), 10)

WebUI.waitForElementPresent(findTestObject('Olusturma/Genel/AliciSecilir/Alici_Ara'), 10)

WebUI.sendKeys(findTestObject('Olusturma/Genel/AliciSecilir/Alici_Ara'), Alici_Adi)

WebUI.waitForElementPresent(findTestObject("Object Repository/Olusturma/Genel/AliciSecilir/Bosluk"), 10)

WebUI.click(findTestObject("Object Repository/Olusturma/Genel/AliciSecilir/Bosluk"))

WebUI.delay(2)

CustomKeywords.'Method.TextDegerineEsitElementeTikla'(findTestObject('Olusturma/Genel/AliciSecilir/Alici_Adi'), Alici_Adi)

WebUI.waitForElementClickable(findTestObject("Object Repository/Olusturma/Genel/AliciSecilir/TamamButonu"), 10)

WebUI.click(findTestObject("Object Repository/Olusturma/Genel/AliciSecilir/TamamButonu"))

WebUI.switchToDefaultContent()

WebUI.waitForElementPresent(findTestObject('Object Repository/Olusturma/Genel/AliciSecilir/VKN-TCKN'), 10)

text = WebUI.getAttribute(findTestObject('Object Repository/Olusturma/Genel/AliciSecilir/VKN-TCKN'),"value")

if (text.equals('')) {
    assert false
}


