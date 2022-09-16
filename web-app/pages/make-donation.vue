<template>
    <div>
        <transition name="popup">
          <div v-if="showP" class="popup">
            Please fill in all the required fields
          </div>
      </transition>
        <div class="row px-5 mx-0">
            <div
                tag="div"
                name="left"
                class="jumbotron bg-white px-2 pt-0 col-md-6 col-lg-6 mb-0 my-auto"
                
                v-vpleft
            >
            
                <h2 class="mt-5">Thank you for your generosity!</h2>
                <p class="mt-4 text-justify" style="font-size:18px "> 
                    Your donation will go a long way in helping the needy who lack access to these items that essential to them. 
                    <br><br>
                    <ul class="ml-4">
                        <li>Ensure your donated item is in good working condition as the needy cannot afford the repair or refurbish cost</li>
                        <li>Pass-It-On does not collect the donated item. We do not perform removal service and have no storage space.</li> 
                    </ul>     
                    For further enquires, please check out out FAQ page. Alternatively, you can email us at passiton@thehelpinghand.org.sg or call us at +65-85119160 (Ms. Gina Ang) during working hours.
                    <br><br>
                    Working hours: 
                    <br>
                    Mondays to Fridays Only - 9am to 5pm, Except Public Holidays
                </p>
                
                <!-- if they arent signed in yet -->
                
                <p style="text-align: center;" v-if="!LoggedIn" class="mt-4">
                    <a class="mt-3 btn btn-success btn-md mx-2" href="/login" role="button">Login</a>
                    <a class="mt-3 btn btn-success btn-md mx-2" href="/signup" role="button">Sign Up</a>
                </p>
                <div v-else class="mt-5"> 
                    <br><br>
                </div>
                
            </div>
            <img
                src="~/assets/make_donation_rules.jpg"
                alt=""
                class="w-100 h-100 col-lg-6 col-md-6 my-auto mx-auto"
                style="max-width: '150px'; max-height: '150px'"
                v-vpshow
            />
        </div>
        <div class="mt-5 text-center py-5" style="background-color:#F0FDF3">
            <h1> How it works </h1>
            <div class="container mt-3" v-vpshow>
                <div class="row"> 
                    <div class="col-lg-4 p-lg-3">
                        <img
                        class=" w-75 mx-auto my-3"
                        src="~/assets/fill_form.png"
                        alt=""
                        />
                        <h5 style="text-align:center; margin-top: 10px; margin-bottom: 10px">1. Fill in the form below.</h5>
                        <div style="margin-bottom: 10px; text-align:justify">You can choose to arrange for transport or send the item directly to VWO/needy. Item is posted on My Donations page until confirmation by VWO.</div>
                    </div>
                    <div class="col-lg-4 col-md-12 p-lg-3 ">
                        <img
                        class=" w-75 mx-auto my-3"
                        src="~/assets/wish-list.png"
                        alt=""
                        />
                        <h5 style="text-align:center; margin-top: 10px; margin-bottom: 10px"> 2. VWO chooses your item</h5>
                        <div style="margin-bottom: 10px; text-align:justify">If Voluntary Welfare Organization (VWO) finds your donated item suitable for the needy under their care, they shall reserve and contact you to arrange for collection or transport of item.</div>
                        
                    </div>
                    <div class="col-lg-4 p-lg-3">
                        <img
                        class=" w-75 mx-auto my-3"
                        src="~/assets/donated.png"
                        alt=""
                        />
                        <h5 style="text-align:center; margin-top: 10px; margin-bottom: 10px"> 3. Viola! </h5>
                        <div style="margin-bottom: 10px; text-align:justify">Your donation is received by the beneficiary. Step by step, let's continue to make this world a better place!</div>
                    </div>
                </div>
                <p class="mt-3"> 
                    Please note that you can see the donation form below only if you are logged in. <br>
                    For more information, please visit the <a href="FAQ"> FAQ </a> page 
                </p>
            </div>
        </div>

        <div class = "container container-fluid my-5" v-if="LoggedIn">
            <h1 style="text-align:center"> Donation Form</h1>
            <form>
                <h5 class="mt-4">Personal Particulars</h5>
                <div class="form-group">
                    <label for="donor-name">Name <span style="color: red;">*</span></label>
                    <input type="input" class="form-control" id="donor_name" aria-describedby="nameHelp" placeholder="Enter name" v-model="form_contents.name">
                </div>
                <div class="form-group">
                    <label for="donor-contact">Contact Number <span style="color: red;">*</span></label>
                    <input type="input" class="form-control" id="donor-contact" placeholder="Contact Number" v-model="form_contents.contact">
                    <small id="ContactNumberHelp" class="form-text text-muted">Mobile number preferred.</small>
                </div>
                <b-alert show variant="danger text-center" style="padding:0.5em" v-if="(!form_contents.contact) && contact_error">
                  {{ contact_error }}
                </b-alert>
                <div class="form-group">
                    <label for="donor-email">Email <span style="color: red;">*</span></label>
                    <input type="input" class="form-control" id="donor-email" placeholder="Enter Your email" v-model="form_contents.email">
                </div>

                <div class="form-row">
                    <div class="form-group col-lg">
                        <label for="donor-postalCode">Postal Code <span style="color: red;">*</span></label>
                        <input type="input" class="form-control" id="donor-postalCode" placeholder="Postal code" v-model="form_contents.postalCode">
                        <b-alert show variant="danger text-center" style="padding:0.5em; margin-top: 1em;" v-if="(!form_contents.postalCode) && postal_error">
                          {{ postal_error }}
                        </b-alert>
                    </div>
                    <div class="form-group col-lg">
                        <label for="inputState">Region <span style="color: red;">*</span></label>
                        <select class="form-control" id="donor-estate" v-model="form_contents.estate">
                            <option>Central</option>
                            <option>North</option>
                            <option>South</option>
                            <option>East</option>
                            <option>West</option>
                        </select>
                        <b-alert show variant="danger text-center" style="padding:0.5em; margin-top: 1em;" v-if="(!form_contents.estate) && estate_error">
                          {{ estate_error }}
                        </b-alert>
                    </div>
                </div>

                <div class="form-group">
                    <label for="donor-address1">Address <span style="color: red;">*</span></label>
                    <input type="input" class="form-control" id="donor-address1" placeholder="Blk/house no" v-model="form_contents.address[0]">
                </div>
                <div class="form-group">
                    <!-- <label for="donor-address3">Address</label> -->
                    <input type="input" class="form-control" id="donor-address3" placeholder="Street" v-model="form_contents.address[1]">
                </div>
                <b-alert show variant="danger text-center" style="padding:0.5em; margin-top: 1em;" v-if="(!this.form_contents.address[0] || !this.form_contents.address[1]) && address_error">
                  {{ address_error }}
                </b-alert>

                <div class="form-group">
                    <label for="donor-contact-time">Preferred Contact Time <span style="color: red;">*</span></label>
                    <input type="input" class="form-control" id="donor-contact-time" placeholder="Day and time" v-model="form_contents.preferredContactTime">
                    <small id="PreferredTimeHelp" class="form-text text-muted">VWOs will try to contact you during stated hours</small>
                </div>
                <b-alert show variant="danger text-center" style="padding:0.5em; margin-top: 1em;" v-if="(!form_contents.preferredContactTime) && contactTime_error">
                  {{ contactTime_error }}
                </b-alert>

                <!-- Donation Items -->
                <h5 class="mt-4">Donation Item Details</h5>
                <div class="form-group">
                    <label for="item-name">Item Name <span style="color: red;">*</span></label>
                    <input type="input" class="form-control" id="item-name" placeholder="Enter item name" v-model="form_contents.itemName">
                </div>
                <b-alert show variant="danger text-center" style="padding:0.5em; margin-top: 1em;" v-if="(!form_contents.itemName) && itemName_error">
                  {{ itemName_error }}
                </b-alert>

                <div class="form-group">
                    <label for="item-description">Item Description <span style="color: red;">*</span></label>
                    <textarea class="form-control" id="item-description" placeholder="Description of item" style="height:100px" v-model="form_contents.itemDescription"></textarea>
                </div>
                <b-alert show variant="danger text-center" style="padding:0.5em; margin-top: 1em;" v-if="(!form_contents.itemDescription) && itemDescription_error">
                  {{ itemDescription_error }}
                </b-alert>

                <div class="form-group">
                    <label for="item-category">Item Category <span style="color: red;">*</span></label>
                    <select class="form-control" id="item-category" v-model="form_contents.itemCat">
                        <option>Clothes</option>
                        <option>Baby Items</option>
                        <option>Home Apppliances</option>
                        <option>Kitchen Items</option>
                        <option>Others</option>
                    </select>
                </div>
                <b-alert show variant="danger text-center" style="padding:0.5em; margin-top: 1em;" v-if="(!form_contents.itemCat) && itemCat_error">
                  {{ itemCat_error }}
                </b-alert>
                <!-- add pictures -->
                <div class="form-group">
                    <label for="item-picture-1">Item Pictures</label>
                    <input type="file" accept="image/*" class="form-control-file" id="item-picture-1" ref='itemPicture1'>    
                </div>
                <div class="form-group">
                    <input type="file" accept="image/*" class="form-control-file" id="item-picture-2" ref='itemPicture2'>    
                </div>
                <div class="form-group">
                    <input type="file" accept="image/*" class="form-control-file" id="item-picture-3" aria-describedby="imgHelp" ref='itemPicture3'>
                    <small id="imgHelp" class="form-text text-muted">Pictures will help VWOs gain a better understanding on how your item looks like</small>    
                </div>
                <!-- images -->
                <label for="item-dimensions" aria-describedby="dimensionHelp">Item Dimension</label>
                    <small id="dimensionHelp" class="form-text text-muted">Pictures will help VWOs gain a better understanding on how your item looks like</small>
                <div class="form-row">                    
                    <div class="col">
                        <input type="text" class="form-control" id="item-length" placeholder="Length (cm)" v-model="form_contents.itemDimension[0]">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" id="item-width" placeholder="Width (cm)" v-model="form_contents.itemDimension[1]">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control"  id="item-height" placeholder="Height (cm)" v-model="form_contents.itemDimension[2]">
                    </div>
                </div>

                <!-- Collection Fees -->
                <h5 style="margin-top:20px;">Collection / Delivery Fees <span style="color: red;">*</span></h5>
                
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="deliveryRadios" id="donor-pays-radio" value="donor-pays" checked v-model="form_contents.delivery">
                    <label class="form-check-label" for="donor-pays-radio">
                        I will pay for the collection fee
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="deliveryRadios" id="send-item-directly-radio" value="send-item-directly" v-model="form_contents.delivery">
                    <label class="form-check-label" for="send-item-directly-radio">
                        I will send directly to VWO/beneficiary
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="deliveryRadios" id="VWO-pays-radio" value="VWO-pays" v-model="form_contents.delivery">
                    <label class="form-check-label" for="VWO-pays-radio">
                        VWO pays for the collection fee
                        <small class="text-muted"> (not recommended) </small>
                    </label>
                </div>
                <b-alert show variant="danger text-center" style="padding:0.5em; margin-top: 1em;" v-if="(!form_contents.delivery) && delivery_error">
                  {{ delivery_error }}
                </b-alert>
                <!-- Shipping Quote -->
                <h5 style="margin-top:20px;">Shipping Quote</h5>
                
                  
                    <div>
                      <p>Estimated Transportation Cost</p>
                      <div class="form-check ">
                    <input class="form-check-input" type="radio" name="transportRadios" id="their-available-radio" value="40" v-model="form_contents.transportationCosts">
                    <label class="form-check-label" for="their-available-radio">
                        Lorry (based on their available slots): $30-$50
                    </label>
                    </div>

                    <div class="form-check ">
                    <input class="form-check-input" type="radio" name="transportRadios" id="donor-available-radio" value="70" v-model="form_contents.transportationCosts">
                    <label class="form-check-label" for="donor-available-radio">
                        Lorry (based on your available slots) : $50-$100
                    </label>
                    </div>
                    </div>
                    <div> <br>
                      <p>Additional Costs</p>
                      <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="addCheck" id="diversion-check" value="40" v-model="form_contents.additionalCosts" >
                    <label class="form-check-label" for="diversion-check">
                        Deliver to more than one address : $30 - $50
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="addCheck" id="moving-stairs-check" value="10" v-model="form_contents.additionalCosts" >
                    <label class="form-check-label" for="moving-stairs-check">
                        Moving one item by stairs : $10 per floor
                    </label>
                    </div>
                    </div>
                    <div> <br>
                      <p>Dismantling and Assembling Costs</p>
                      <div class="form-check ">
                    <input class="form-check-input" type="checkbox" name="assemblyCheck" id="simple-check" value="40" v-model="form_contents.assemblingCosts">
                    <label class="form-check-label" for="simple-check">
                        Dismantling & assembling simple straight-forward jobs : $30 - $50
                    </label>
                    </div>
                    <div class="form-check ">
                    <input class="form-check-input" type="checkbox" name="assemblyCheck" id="complicated-check" value="80" v-model="form_contents.assemblingCosts">
                    <label class="form-check-label" for="complicated-check">
                        Dismantling & assembling more effort and slightly complicated jobs : $50 - $150
                    </label>
                    </div>
                    <div class="form-check ">
                    <input class="form-check-input" type="checkbox" name="assemblyCheck" id="cabinet" value="100" v-model="form_contents.assemblingCosts">
                    <label class="form-check-label" for="cabinet">
                        Glass Cabinet / Massage Chair/ Marble Table : $80 - $150
                    </label>
                    </div>
                    <div class="form-check ">
                    <input class="form-check-input" type="checkbox" name="deliveryRadios" id="bed" value="150" v-model="form_contents.assemblingCosts">
                    <label class="form-check-label" for="bed">
                        Hospital Bed / Bunk Bed / Piano : $80 - $200
                    </label>
                    </div>
                    </div><br>
                    <div v-show="total_bill != null">
                     <span> <h6>Your Bill:</h6> </span>
                      <div v-html="total_bill()">

                      </div>
                      
                  </div>

                    <!-- <span>Total Costs: {{form_contents.totalCosts}}</span> -->
                    <!-- <button class = "mt-3 btn btn-success btn-md" v-on:click="calculate()">See estimated transport cost</button> <br> -->
                    <small class="text-muted">  Note that shipping fees quoted are a rough estimate based on moving service provided by The Helping Hand, which comes at discounted rates. 
                        <br>The final shipping fee can only be confirmed upon confirmation of transportation. 
                        The price guide can be found 
                        <a href="https://www.passiton.org.sg/pio/slot/u13/moving-service/Pass%20It%20On%20-%20Rates%20and%20Terms%20for%20movers%20vs3.1.pdf" target="_blank">here</a>
                    </small> <br>
                    <small> 
                      <b>Terms & Conditions:</b>
                      <ul>
                        <li> Payment to be made in cash at collection point – Donor’s place. </li>
                        <li> Movers deserve the right to reject / cancel the job order if payment is not made. </li>
                        <li> Please note that the rates are exclusive to Pass-It-On only with movers supporting the initiative. </li>
                        <li> Rates are the same for weekends including Sunday & public holidays. (Exclude THH) </li>
                        <li> We seek everyone’s cooperation to use the service & rates in good faith. </li>
                        <li> Be patience for delivery request via email, they will try their best to respond within 24 hours. </li>
                      </ul>
                    </small>
                    
                <!-- end of form -->
                <p style="text-align: center;">
                    <!-- need to link to donation-confirmed page -->
                    <button class="btn mt-3 ml-1 btn btn-success btn-md" @click.prevent='donate'>Submit donation form</button>
                </p>
                
            </form>
        </div> 
    <Footer></Footer>
    </div>
</template>

<script>
import { getUserFromCookie } from '@/helpers'
import { getAuth, updateProfile } from 'firebase/auth'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore'
const db = getFirestore()

export default {
  watchQuery: ['page'],
  mounted() {
    this.form_contents.name = this.displayname
    this.form_contents.email = this.user_email
    if (this.$route.query.item) {
      console.log(this.$route.query.item)
      let item = this.$route.query.item
      this.form_contents.itemName = item.itemName
      this.form_contents.itemCat = item.itemCat
    }
  },
  data() {
    return {
      LoggedIn: false,
      form_contents: {
        name: '',
        contact: '',
        email: '',
        postalCode: '',
        estate: '',
        address: ['', ''],
        preferredContactTime: '',
        itemName: '',
        itemDescription: '',
        itemCat: '',
        itemDimension: ['', '', ''],
        delivery: '',
        transportationCosts: '',
        additionalCosts: [],
        assemblingCosts: [],
        totalCosts: 0,
      },
      contact_error: '',
      postal_error: '',
      estate_error: '',
      address_error: '',
      contactTime_error: '',
      itemName_error: '',
      itemCat_error: '',
      itemDescription_error: '',
      delivery_error: '',
      error: '',
      showP: false,
    }
  },
  asyncData({ req, redirect }) {
    if (process.server) {
      console.log('server')
      const user = getUserFromCookie(req)
      if (user) {
        const LoggedIn = true
        const displayname = user.name
        const user_email = user.email
        const userid = user.user_id
        console.log(user)
        return { LoggedIn, displayname, user_email, userid }
      }
      if (!user) {
        const LoggedIn = false
        return { LoggedIn }
      }
    } else {
      console.log('client')
      const auth = getAuth()
      var firebaseuser = auth.currentUser
      console.log(firebaseuser)
      if (firebaseuser) {
        const LoggedIn = true
        console.log(firebaseuser)
        const displayname = firebaseuser.displayName
        const user_email = firebaseuser.email
        const userid = firebaseuser.uid
        return { LoggedIn, displayname, user_email, userid }
      }
      if (!firebaseuser) {
        const LoggedIn = false
        return { LoggedIn }
      }
    }
  },
  methods: {
    total_bill() {
      if (this.form_contents.transportationCosts == null) {
        return null
      }
      let str = `<p>`
      let total = 0
      let transportCosts = Number(this.form_contents.transportationCosts)
      total += transportCosts
      for (let addCost of this.form_contents.additionalCosts) {
        total += Number(addCost)
      }

      for (let asscost of this.form_contents.assemblingCosts) {
        total += Number(asscost)
      }
      this.form_contents.totalCosts = total

      str += `$${total} </p>`

      return str
    },
    donate() {
      console.log(this.form_contents)
      let picture1 = this.$refs.itemPicture1.files[0]
      let picture2 = this.$refs.itemPicture2.files[0]
      let picture3 = this.$refs.itemPicture3.files[0]

      if (!this.form_contents.contact) {
        this.contact_error = 'Please enter your contact number'
        this.error = 'Please fill in all the required fields'
      }
      if (!this.form_contents.postalCode) {
        this.postal_error = 'Please enter your postalcode'
        this.error = 'Please fill in all the required fields'
      }
      if (!this.form_contents.estate) {
        this.estate_error = 'Please select a region'
        this.error = 'Please fill in all the required fields'
      }
      if (!this.form_contents.address[0] || !this.form_contents.address[1]) {
        this.address_error = 'Please enter your address'
        this.error = 'Please fill in all the required fields'
      }
      if (!this.form_contents.preferredContactTime) {
        this.contactTime_error = 'Please enter your preferred contact time'
        this.error = 'Please fill in all the required fields'
      }
      if (!this.form_contents.itemName) {
        this.itemName_error =
          'Please enter the name of the item you are donating'
        this.error = 'Please fill in all the required fields'
      }
      if (!this.form_contents.itemDescription) {
        this.itemDescription_error =
          'Please enter a description of the item you are donating'
        this.error = 'Please fill in all the required fields'
      }
      if (!this.form_contents.itemCat) {
        this.itemCat_error = 'Please select an item category'
        this.error = 'Please fill in all the required fields'
      }
      if (!this.form_contents.delivery) {
        this.delivery_error = 'Please select delivery method'
        this.error = 'Please fill in all the required fields'
      }

      if (this.error) {
        this.setupPopup()
        return
      }

      console.log(this.form_contents)
      addDoc(collection(db, 'Donated Items'), {
        name: this.form_contents.name,
        contact: this.form_contents.contact,
        email: this.form_contents.email,
        postalCode: this.form_contents.postalCode,
        estate: this.form_contents.estate,
        address: this.form_contents.address,
        preferredContactTime: this.form_contents.preferredContactTime,
        itemName: this.form_contents.itemName,
        itemDescription: this.form_contents.itemDescription,
        itemCat: this.form_contents.itemCat,
        itemDimension: this.form_contents.itemDimension,
        delivery: this.form_contents.delivery,
        user_id: this.userid,
        status: 'Pending',
        organization: '',
      }).then((response) => {
        console.log(response.id)
        if (picture1) {
          this.uploadImage(picture1, response.id)
        }
        if (picture2) {
          this.uploadImage(picture2, response.id)
        }
        if (picture3) {
          this.uploadImage(picture3, response.id)
        }
      })
      this.$router.push('/donation-confirmed')
    },
    setupPopup() {
      this.showP = true
      setTimeout(() => (this.showP = false), 3000)
    },
    uploadImage(file, docID) {
      const storage = getStorage()
      const metadata = {
        contentType: 'image/jpeg',
      }
      console.log(docID)

      const storageRef = ref(storage, 'donations/' + file.name)
      const uploadTask = uploadBytesResumable(storageRef, file, metadata)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              break
            case 'storage/canceled':
              break

            case 'storage/unknown':
              break
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL)
            console.log(docID)
            const docRef = doc(db, 'Donated Items', docID)
            updateDoc(docRef, {
              itemPictureURL: arrayUnion(downloadURL),
            })
          })
        }
      )
    },
  },
}
</script>

<style scoped>
.left-enter {
  opacity: 0;
  transform: translateX(-60px);
}

.left-enter-active {
  transition: transform 1s ease;
}

.right-enter {
  opacity: 0;
  transform: translateX(60px);
}

.right-enter-active {
  transition: transform 1s ease;
}

.before-enter {
  opacity: 0;
}

.enter {
  transition: opacity 2s ease;
}

.popup {
  color: white;
  background-color: #F93154;
  padding: 10px;
  text-align: center;
  position: fixed;
  width: 30%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  left: 35%;
  z-index: 1;
}

.popup-enter,
.popup-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.popup-enter-active,
.popup-leave-active {
  transition: 0.3s ease all;
}
</style>
