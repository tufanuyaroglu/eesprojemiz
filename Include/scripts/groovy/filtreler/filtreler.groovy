package filtreler
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class filtreler {
	@Given("Filtrelerden (.*) filtresine (.*) textini yaz")
	def filtreTexboxinaYaz(String filtre_Adi, String filtreDegeri) {
		WebUI.callTestCase(findTestCase("Test Cases/Filtreler/TexboxaYaz"), ["Filtre_Adi":filtre_Adi,"Filtre_Degeri":filtreDegeri] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Filtrelerden (.*) filtresine (.*) baslangic degerini yaz")
	def filtreBaslangicYaz(String filtre_Adi, String filtreDegeri) {
		WebUI.callTestCase(findTestCase("Test Cases/Filtreler/BaslangicYaz"), ["Filtre_Adi":filtre_Adi,"Filtre_Degeri":filtreDegeri] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Filtrelerden (.*) filtresine (.*) bitis degerini yaz")
	def filtreBitisYaz(String filtre_Adi, String filtreDegeri) {
		WebUI.callTestCase(findTestCase("Test Cases/Filtreler/BitisYaz"), ["Filtre_Adi":filtre_Adi,"Filtre_Degeri":filtreDegeri] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Filtrelerden (.*) filtresine (.*) dropdowndan degeri seçilir")
	def filtreDropdownSec(String filtre_Adi, String filtreDegeri) {
		WebUI.callTestCase(findTestCase("Test Cases/Filtreler/DropdownSec"), ["Filtre_Adi":filtre_Adi,"Filtre_Degeri":filtreDegeri] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Filtre butonlarından (.*) seçilir")
	def filtreButonSec(String filtre_Buton) {
		WebUI.callTestCase(findTestCase("Test Cases/Filtreler/ButonaTikla"), ["Filtre_Buton":filtre_Buton] , FailureHandling.STOP_ON_FAILURE)
	}

	@When("Filtre alanlarında (.*) var mı")
	def filtreVarMi(String filtre_alan) {
		WebUI.callTestCase(findTestCase("Test Cases/Filtreler/FiltreVarMi"), ["Filtre_alan":filtre_alan] , FailureHandling.STOP_ON_FAILURE)
	}
	@When("Filtre butonlarında (.*) var mı")
	def butonVarMi(String filtre_Buton) {
		WebUI.callTestCase(findTestCase("Test Cases/Filtreler/ButonVarMi"),["Filtre_Buton":filtre_Buton] , FailureHandling.STOP_ON_FAILURE)
	}
}