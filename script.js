/* =========================================================
   LIFELINK
   ORGAN DONATION MANAGEMENT SYSTEM

   Hackathon Prototype
========================================================= */


/* =========================================================
   HOSPITAL DATA
========================================================= */

const hospitals = [

    {
        id: 1,
        name: "City Hospital",
        city: "Bengaluru, Karnataka",
        speciality: "Transplant & Organ Donation",
        type: "Transplant Center",
        image:
            "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 2,
        name: "Apollo Hospitals",
        city: "Bengaluru, Karnataka",
        speciality: "Multi-specialty Care",
        type: "Multi-specialty",
        image:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 3,
        name: "Manipal Hospitals",
        city: "Bengaluru, Karnataka",
        speciality: "Advanced Healthcare",
        type: "Advanced Care",
        image:
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 4,
        name: "Narayana Health",
        city: "Bengaluru, Karnataka",
        speciality: "Heart & Multi-organ Care",
        type: "Specialized Care",
        image:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 5,
        name: "Fortis Hospital",
        city: "Bengaluru, Karnataka",
        speciality: "Multi-specialty Care",
        type: "Multi-specialty",
        image:
            "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 6,
        name: "Aster Hospitals",
        city: "Bengaluru, Karnataka",
        speciality: "Specialized Medical Care",
        type: "Specialized Care",
        image:
            "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 7,
        name: "KIMS Hospitals",
        city: "Bengaluru, Karnataka",
        speciality: "Advanced Medical Care",
        type: "Advanced Care",
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 8,
        name: "Rainbow Children's Hospital",
        city: "Bengaluru, Karnataka",
        speciality: "Children's Healthcare",
        type: "Children's Care",
        image:
            "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=85"
    }

];


/* =========================================================
   DUMMY DONOR DATA
   These make AI matching work immediately.
========================================================= */

const demoDonors = [

    {
        id: 101,
        name: "Arjun Kumar",
        age: 29,
        blood: "O+",
        organ: "Kidney",
        city: "Bengaluru",
        phone: "9876543210",
        registeredAt: "12 Jan 2026",
        type: "Demo"
    },

    {
        id: 102,
        name: "Priya Sharma",
        age: 34,
        blood: "A+",
        organ: "Liver",
        city: "Bengaluru",
        phone: "9876543211",
        registeredAt: "18 Jan 2026",
        type: "Demo"
    },

    {
        id: 103,
        name: "Rahul Mehta",
        age: 31,
        blood: "B+",
        organ: "Heart",
        city: "Mysuru",
        phone: "9876543212",
        registeredAt: "23 Jan 2026",
        type: "Demo"
    },

    {
        id: 104,
        name: "Sneha Reddy",
        age: 27,
        blood: "O+",
        organ: "Kidney",
        city: "Bengaluru",
        phone: "9876543213",
        registeredAt: "02 Feb 2026",
        type: "Demo"
    },

    {
        id: 105,
        name: "Vikram Rao",
        age: 40,
        blood: "A+",
        organ: "Kidney",
        city: "Bengaluru",
        phone: "9876543214",
        registeredAt: "08 Feb 2026",
        type: "Demo"
    },

    {
        id: 106,
        name: "Ananya Singh",
        age: 30,
        blood: "B-",
        organ: "Lungs",
        city: "Bengaluru",
        phone: "9876543215",
        registeredAt: "15 Feb 2026",
        type: "Demo"
    },

    {
        id: 107,
        name: "Karan Patel",
        age: 36,
        blood: "AB+",
        organ: "Liver",
        city: "Tumakuru",
        phone: "9876543216",
        registeredAt: "20 Feb 2026",
        type: "Demo"
    },

    {
        id: 108,
        name: "Meera Nair",
        age: 25,
        blood: "O-",
        organ: "Kidney",
        city: "Bengaluru",
        phone: "9876543217",
        registeredAt: "27 Feb 2026",
        type: "Demo"
    }

];


/* =========================================================
   DUMMY RECIPIENT DATA
========================================================= */

const demoRecipients = [

    {
        id: 201,
        name: "Rohan Verma",
        age: 42,
        blood: "O+",
        organ: "Kidney",
        urgency: "Critical",
        hospital: "City Hospital",
        phone: "9000000001",
        registeredAt: "03 Mar 2026",
        status: "AI Match Pending"
    },

    {
        id: 202,
        name: "Kavya Rao",
        age: 38,
        blood: "A+",
        organ: "Liver",
        urgency: "High",
        hospital: "Apollo Hospitals",
        phone: "9000000002",
        registeredAt: "05 Mar 2026",
        status: "Matching"
    },

    {
        id: 203,
        name: "Aditya Shah",
        age: 51,
        blood: "B+",
        organ: "Heart",
        urgency: "Critical",
        hospital: "Narayana Health",
        phone: "9000000003",
        registeredAt: "07 Mar 2026",
        status: "Priority"
    },

    {
        id: 204,
        name: "Neha Joshi",
        age: 28,
        blood: "B-",
        organ: "Lungs",
        urgency: "High",
        hospital: "Manipal Hospitals",
        phone: "9000000004",
        registeredAt: "09 Mar 2026",
        status: "Matching"
    }

];


/* =========================================================
   DUMMY ORGAN INVENTORY
========================================================= */

const demoInventory = [

    {
        organ: "Kidney",
        blood: "O+",
        hospital: "City Hospital",
        status: "Available",
        updated: "Today"
    },

    {
        organ: "Kidney",
        blood: "A+",
        hospital: "Fortis Hospital",
        status: "Available",
        updated: "Today"
    },

    {
        organ: "Liver",
        blood: "A+",
        hospital: "Apollo Hospitals",
        status: "Available",
        updated: "2 hrs ago"
    },

    {
        organ: "Heart",
        blood: "B+",
        hospital: "Narayana Health",
        status: "Available",
        updated: "1 hr ago"
    },

    {
        organ: "Lungs",
        blood: "B-",
        hospital: "Manipal Hospitals",
        status: "Available",
        updated: "3 hrs ago"
    },

    {
        organ: "Cornea",
        blood: "AB+",
        hospital: "Rainbow Children's Hospital",
        status: "Available",
        updated: "4 hrs ago"
    },

    {
        organ: "Pancreas",
        blood: "O+",
        hospital: "Aster Hospitals",
        status: "Available",
        updated: "Today"
    }

];


/* =========================================================
   APPLICATION STATE
========================================================= */

let donors = [];

let recipients = [];

/*
    IMPORTANT:
    Start with demo inventory so the public page
    immediately shows available organs.
*/

let inventory = demoInventory.map((item, index) => ({

    id: `demo-${index + 1}`,

    organ: item.organ,

    blood: item.blood,

    hospital: item.hospital,

    status: item.status,

    updated: item.updated,

    ownerId: null,

    demo: true

}));


let inventoryHistory = [];

let requests = [];

let matchHistory = [];

let supabaseClient = null;

let currentUser = null;

let currentAppRole = "member";

let isSignUpMode = false;


/* =========================================================
   DOM REFERENCES
========================================================= */

const hospitalGrid =
    document.getElementById("hospitalGrid");


const hospitalSearch =
    document.getElementById("hospitalSearch");


const recipientHospital =
    document.getElementById("recipientHospital");


const donorForm =
    document.getElementById("donorForm");


const recipientForm =
    document.getElementById("recipientForm");


const matchForm =
    document.getElementById("matchForm");


const matchResults =
    document.getElementById("matchResults");


const inventoryBody =
    document.getElementById("inventoryBody");


const inventoryForm =
    document.getElementById("inventoryForm");


const requestsBody =
    document.getElementById("requestsBody");


const donorHistoryBody =
    document.getElementById("donorHistoryBody");


const recipientHistoryBody =
    document.getElementById("recipientHistoryBody");


const organHistoryBody =
    document.getElementById("organHistoryBody");


const toast =
    document.getElementById("toast");


const loginModal =
    document.getElementById("loginModal");


const adminPanel =
    document.getElementById("adminPanel");


/* =========================================================
   HOSPITAL RENDERING
========================================================= */

function renderHospitals(search = "") {

    const term =
        search.toLowerCase().trim();


    const filtered =
        hospitals.filter(hospital => {

            return (

                hospital.name
                    .toLowerCase()
                    .includes(term)

                ||

                hospital.city
                    .toLowerCase()
                    .includes(term)

                ||

                hospital.speciality
                    .toLowerCase()
                    .includes(term)

            );

        });


    if (!filtered.length) {

        hospitalGrid.innerHTML = `

            <div class="empty-search">

                <i class="fa-solid fa-hospital"></i>

                <h3>No hospital found</h3>

                <p>
                    Try searching for another hospital.
                </p>

            </div>

        `;

        return;
    }


    hospitalGrid.innerHTML =
        filtered.map(hospital => `

            <article class="hospital-card">

                <div class="hospital-image">

                    <img
                        src="${hospital.image}"
                        alt="${hospital.name}"
                        loading="lazy"
                    >

                    <span class="hospital-type">
                        ${hospital.type}
                    </span>

                </div>


                <div class="hospital-body">

                    <h3>
                        ${hospital.name}
                    </h3>

                    <div class="hospital-location">

                        <i class="fa-solid fa-location-dot"></i>

                        ${hospital.city}

                    </div>


                    <p class="hospital-speciality">
                        ${hospital.speciality}
                    </p>


                    <div class="hospital-footer">

                        <span class="hospital-status">

                            <i class="fa-solid fa-circle-check"></i>

                            Connected

                        </span>

                        <span class="hospital-view">
                            LifeLink Network
                        </span>

                    </div>

                </div>

            </article>

        `).join("");

}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHtml(value) {

    const entities = {

        "&": "&amp;",

        "<": "&lt;",

        ">": "&gt;",

        '"': "&quot;",

        "'": "&#39;"

    };

    return String(value ?? "")
        .replace(
            /[&<>"']/g,
            character =>
                entities[character]
        );

}


/* =========================================================
   HOSPITAL SELECT
========================================================= */

function populateHospitalSelect() {

    recipientHospital.innerHTML =
        `<option value="">Select hospital</option>`;


    hospitals.forEach(hospital => {

        const option =
            document.createElement("option");


        option.value =
            hospital.name;


        option.textContent =
            hospital.name;


        recipientHospital.appendChild(option);

    });

}


/* =========================================================
   INVENTORY TABLE
========================================================= */

function renderInventory() {

    const isStaff = Boolean(

        currentUser &&

        ["hospital", "admin"]
            .includes(currentAppRole)

    );


    if (inventoryForm) {

        inventoryForm.hidden =
            !isStaff;

    }


    if (!inventory.length) {

        const emptyMessage = !currentUser

            ? "Sign in to load shared organ availability."

            : isStaff

                ? "No availability has been added yet. Use the form above to report organs."

                : "No hospital has reported organ availability yet.";


        inventoryBody.innerHTML = `

            <tr>

                <td
                    colspan="5"
                    class="empty-table"
                >

                    ${escapeHtml(emptyMessage)}

                </td>

            </tr>

        `;

        return;
    }


    inventoryBody.innerHTML =

        inventory.map(item => {

            const statusClass =

                item.status === "Available"

                    ? "available"

                    : item.status === "Transplanted"

                        ? "critical"

                        : item.status === "Reserved"

                            ? "high"

                            : "pending";


            const canUpdate =

                isStaff &&

                !item.demo &&

                item.ownerId ===
                    currentUser.id;


            return `

                <tr>

                    <td>

                        <strong>
                            ${escapeHtml(item.organ)}
                        </strong>

                    </td>


                    <td>
                        ${escapeHtml(item.blood)}
                    </td>


                    <td>
                        ${escapeHtml(item.hospital)}
                    </td>


                    <td>

                        <span
                            class="status ${statusClass}"
                        >

                            ${escapeHtml(item.status)}

                        </span>

                    </td>


                    <td>

                        <div>
                            ${escapeHtml(item.updated)}
                        </div>


                        ${canUpdate ? `

                            <div
                                class="inventory-row-controls"
                            >

                                <select
                                    aria-label="Availability for ${escapeHtml(item.organ)}"
                                    data-inventory-status
                                >

                                    ${
                                        [
                                            "Available",
                                            "Reserved",
                                            "Transplanted",
                                            "Unavailable"
                                        ]

                                        .map(status => `

                                            <option
                                                ${
                                                    item.status === status
                                                        ? "selected"
                                                        : ""
                                                }
                                            >
                                                ${status}
                                            </option>

                                        `)
                                        .join("")
                                    }

                                </select>


                                <button
                                    type="button"
                                    data-inventory-save="${escapeHtml(item.id)}"
                                >
                                    Save
                                </button>

                            </div>

                        ` : ""}

                    </td>

                </tr>

            `;

        }).join("");

}


/* =========================================================
   REQUEST TABLE
========================================================= */

function renderRequests() {

    if (!requests.length) {

        requestsBody.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    class="empty-table"
                >

                    No requests available.

                </td>

            </tr>

        `;

        return;
    }


    requestsBody.innerHTML =

        requests.map(request => {

            let className =
                "pending";


            if (
                request.urgency ===
                "Critical"
            ) {

                className =
                    "critical";

            }

            else if (
                request.urgency ===
                "High"
            ) {

                className =
                    "high";

            }


            return `

                <tr>

                    <td>

                        <strong>
                            ${escapeHtml(request.name)}
                        </strong>

                    </td>


                    <td>
                        ${escapeHtml(request.organ)}
                    </td>


                    <td>
                        ${escapeHtml(request.blood)}
                    </td>


                    <td>
                        ${escapeHtml(request.hospital)}
                    </td>


                    <td>

                        <span
                            class="status ${className}"
                        >

                            ${escapeHtml(request.urgency)}

                        </span>

                    </td>


                    <td>

                        <span
                            class="status pending"
                        >

                            ${escapeHtml(request.status)}

                        </span>

                    </td>

                </tr>

            `;

        }).join("");

}


/* =========================================================
   DONOR HISTORY
========================================================= */

function renderDonorHistory() {

    document.getElementById(
        "donorHistoryCount"
    ).textContent =
        donors.length;


    if (!donors.length) {

        donorHistoryBody.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    class="empty-table"
                >

                    No donor registrations yet.

                </td>

            </tr>

        `;

        return;
    }


    donorHistoryBody.innerHTML =

        donors
            .slice()
            .reverse()
            .map(donor => `

                <tr>

                    <td>

                        <strong>
                            ${escapeHtml(donor.name)}
                        </strong>

                    </td>


                    <td>
                        ${escapeHtml(donor.age)}
                    </td>


                    <td>
                        ${escapeHtml(donor.blood)}
                    </td>


                    <td>
                        ${escapeHtml(donor.organ)}
                    </td>


                    <td>
                        ${escapeHtml(donor.city)}
                    </td>


                    <td>
                        ${escapeHtml(donor.registeredAt)}
                    </td>

                </tr>

            `)
            .join("");

}


/* =========================================================
   RECIPIENT HISTORY
========================================================= */

function renderRecipientHistory() {

    document.getElementById(
        "recipientHistoryCount"
    ).textContent =
        recipients.length;


    if (!recipients.length) {

        recipientHistoryBody.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    class="empty-table"
                >

                    No recipient requests yet.

                </td>

            </tr>

        `;

        return;
    }


    recipientHistoryBody.innerHTML =

        recipients
            .slice()
            .reverse()
            .map(recipient => `

                <tr>

                    <td>

                        <strong>
                            ${escapeHtml(recipient.name)}
                        </strong>

                    </td>


                    <td>
                        ${escapeHtml(recipient.organ)}
                    </td>


                    <td>
                        ${escapeHtml(recipient.blood)}
                    </td>


                    <td>
                        ${escapeHtml(recipient.hospital)}
                    </td>


                    <td>

                        <span
                            class="status ${
                                recipient.urgency === "Critical"

                                    ? "critical"

                                    : recipient.urgency === "High"

                                        ? "high"

                                        : "pending"
                            }"
                        >

                            ${escapeHtml(
                                recipient.urgency
                            )}

                        </span>

                    </td>


                    <td>

                        <span
                            class="status pending"
                        >

                            ${escapeHtml(
                                recipient.status ||
                                "Pending"
                            )}

                        </span>

                    </td>

                </tr>

            `)
            .join("");

}


/* =========================================================
   ORGAN HISTORY
========================================================= */

function renderOrganHistory() {

    document.getElementById(
        "organHistoryCount"
    ).textContent =
        inventoryHistory.length;


    if (!inventoryHistory.length) {

        organHistoryBody.innerHTML = `

            <tr>

                <td
                    colspan="8"
                    class="empty-table"
                >

                    No availability changes
                    have been recorded yet.

                </td>

            </tr>

        `;

        return;
    }


    organHistoryBody.innerHTML =

        inventoryHistory
            .map(item => `

                <tr>

                    <td>

                        <strong>
                            ${escapeHtml(item.organ)}
                        </strong>

                    </td>


                    <td>
                        ${escapeHtml(item.blood)}
                    </td>


                    <td>
                        ${escapeHtml(item.hospital)}
                    </td>


                    <td>

                        <span
                            class="status ${
                                item.action === "Removed"

                                    ? "critical"

                                    : item.action === "Added"

                                        ? "available"

                                        : "pending"
                            }"
                        >

                            ${escapeHtml(
                                item.action
                            )}

                        </span>

                    </td>


                    <td>
                        ${escapeHtml(
                            item.previousStatus || "-"
                        )}
                    </td>


                    <td>
                        ${escapeHtml(
                            item.status || "-"
                        )}
                    </td>


                    <td>
                        ${escapeHtml(
                            item.updatedBy
                        )}
                    </td>


                    <td>
                        ${escapeHtml(
                            item.updated
                        )}
                    </td>

                </tr>

            `)
            .join("");

}


/* =========================================================
   STATS
========================================================= */

function updateStats() {

    document.getElementById(
        "donorCount"
    ).textContent =
        donors.length;


    document.getElementById(
        "recipientCount"
    ).textContent =
        recipients.length;


    document.getElementById(
        "hospitalCount"
    ).textContent =
        hospitals.length;


    document.getElementById(
        "organCount"
    ).textContent =
        inventory.length;


    document.getElementById(
        "historyDonorTotal"
    ).textContent =
        donors.length;


    document.getElementById(
        "historyRecipientTotal"
    ).textContent =
        recipients.length;


    document.getElementById(
        "historyOrganTotal"
    ).textContent =
        inventory.length;


    document.getElementById(
        "historyMatchTotal"
    ).textContent =
        matchHistory.length;


    updateAdminStats();

}


/* =========================================================
   ADMIN STATS
========================================================= */

function updateAdminStats() {

    document.getElementById(
        "adminDonors"
    ).textContent =
        donors.length;


    document.getElementById(
        "adminRecipients"
    ).textContent =
        requests.length;


    document.getElementById(
        "adminHospitals"
    ).textContent =
        hospitals.length;


    document.getElementById(
        "adminOrgans"
    ).textContent =
        inventory.length;

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(
    title,
    message
) {

    document.getElementById(
        "toastTitle"
    ).textContent =
        title;


    document.getElementById(
        "toastMessage"
    ).textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            4000
        );

}


/* =========================================================
   RENDER ALL DATA
========================================================= */

function renderData() {

    renderInventory();

    renderRequests();

    renderDonorHistory();

    renderRecipientHistory();

    renderOrganHistory();

    updateStats();

}


/* =========================================================
   AUTH UI
========================================================= */

function renderAuthState() {

    const openLogin =
        document.getElementById(
            "openLogin"
        );


    const isStaff =
        [
            "hospital",
            "admin"
        ].includes(
            currentAppRole
        );


    openLogin.innerHTML = currentUser

        ? '<i class="fa-solid fa-right-from-bracket"></i> Sign out'

        : '<i class="fa-solid fa-right-to-bracket"></i> Login';


    document.getElementById(
        "mobileAuth"
    ).textContent =
        currentUser
            ? "Sign out"
            : "Login";


    adminPanel.classList.toggle(
        "active",
        Boolean(
            currentUser &&
            isStaff
        )
    );


    if (
        currentUser &&
        isStaff
    ) {

        updateAdminStats();

    }

}


/* =========================================================
   CLEAR PRIVATE DATA
   IMPORTANT FIX
========================================================= */

function clearPrivateData() {

    /*
        Donor and recipient data is private,
        so it is cleared when the user logs out.
    */

    donors = [];

    recipients = [];


    /*
        DO NOT clear inventory completely.

        The public website should continue showing
        the demonstration organ availability.

        This is the main fix for:

        "No organs available."
    */

    inventory =
        demoInventory.map(
            (item, index) => ({

                id:
                    `demo-${index + 1}`,

                organ:
                    item.organ,

                blood:
                    item.blood,

                hospital:
                    item.hospital,

                status:
                    item.status,

                updated:
                    item.updated,

                ownerId:
                    null,

                demo:
                    true

            })
        );


    inventoryHistory = [];

    requests = [];

    matchHistory = [];

    currentAppRole =
        "member";


    renderAuthState();

    renderData();

}


/* =========================================================
   MAP DONOR
========================================================= */

function mapDonor(row) {

    return {

        id:
            row.id,

        name:
            row.name,

        age:
            row.age,

        blood:
            row.blood_group,

        organ:
            row.organ,

        city:
            row.city,

        phone:
            row.phone,

        registeredAt:
            new Date(
                row.created_at
            ).toLocaleDateString(),

        type:
            "Registered"

    };

}


/* =========================================================
   MAP RECIPIENT
========================================================= */

function mapRecipient(row) {

    return {

        id:
            row.id,

        name:
            row.name,

        age:
            row.age,

        blood:
            row.blood_group,

        organ:
            row.organ,

        urgency:
            row.urgency,

        hospital:
            row.hospital,

        phone:
            row.phone,

        registeredAt:
            new Date(
                row.created_at
            ).toLocaleDateString(),

        status:
            row.status

    };

}


/* =========================================================
   LOAD APPLICATION DATA
========================================================= */

async function loadApplicationData() {

    /*
        If the user is not logged in,
        keep the demo inventory visible.
    */

    if (
        !supabaseClient ||
        !currentUser
    ) {

        clearPrivateData();

        return;

    }


    const loadingUserId =
        currentUser.id;


    const [

        profileResult,

        donorResult,

        recipientResult,

        inventoryResult,

        matchResult,

        inventoryHistoryResult

    ] =

        await Promise.all([

            supabaseClient
                .from("profiles")
                .select("role")
                .eq(
                    "id",
                    currentUser.id
                )
                .maybeSingle(),

            supabaseClient
                .from("donors")
                .select("*")
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                ),

            supabaseClient
                .from("recipients")
                .select("*")
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                ),

            supabaseClient
                .from("inventory")
                .select("*")
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                ),

            supabaseClient
                .from("match_history")
                .select("*")
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                ),

            supabaseClient
                .from("inventory_history")
                .select("*")
                .order(
                    "changed_at",
                    {
                        ascending: false
                    }
                )

        ]);


    if (
        currentUser?.id !==
        loadingUserId
    ) {

        return;

    }


    currentAppRole =
        profileResult.data?.role ||
        "member";


    donors =
        (donorResult.data || [])
            .map(mapDonor);


    recipients =
        (recipientResult.data || [])
            .map(mapRecipient);


    /* =====================================================
       ORGAN INVENTORY LOADING

       If Supabase has real inventory records:
       use those.

       If Supabase is empty:
       use demo inventory.

       This keeps Available Organs populated.
    ===================================================== */

    if (
        inventoryResult.data &&
        inventoryResult.data.length > 0
    ) {

        inventory =
            inventoryResult.data.map(
                row => ({

                    id:
                        row.id,

                    organ:
                        row.organ,

                    blood:
                        row.blood_group,

                    hospital:
                        row.hospital_name,

                    status:
                        row.status,

                    updated:
                        row.updated_at

                            ? new Date(
                                row.updated_at
                            ).toLocaleString()

                            : "Recently updated",

                    ownerId:
                        row.owner_id,

                    demo:
                        false

                })
            );

    }

    else {

        /*
            Supabase inventory is empty
            or unavailable.

            Use demo records.
        */

        inventory =
            demoInventory.map(
                (item, index) => ({

                    id:
                        `demo-${index + 1}`,

                    organ:
                        item.organ,

                    blood:
                        item.blood,

                    hospital:
                        item.hospital,

                    status:
                        item.status,

                    updated:
                        item.updated,

                    ownerId:
                        null,

                    demo:
                        true

                })
            );

    }


    inventoryHistory =
        (
            inventoryHistoryResult.data ||
            []
        ).map(row => ({

            organ:
                row.organ,

            blood:
                row.blood_group,

            hospital:
                row.hospital_name,

            action:
                row.action,

            previousStatus:
                row.old_status,

            status:
                row.new_status,

            updatedBy:
                row.changed_by ===
                    currentUser.id

                    ? "You"

                    : "Hospital staff",

            updated:
                new Date(
                    row.changed_at
                ).toLocaleString()

        }));


    matchHistory =
        (
            matchResult.data ||
            []
        ).map(row => ({

            id:
                row.id,

            organ:
                row.organ,

            blood:
                row.blood_group,

            urgency:
                row.urgency,

            matchCount:
                row.match_count,

            timestamp:
                new Date(
                    row.created_at
                ).toLocaleString()

        }));


    requests =
        recipients.map(
            recipient => ({

                id:
                    recipient.id,

                name:
                    recipient.name,

                organ:
                    recipient.organ,

                blood:
                    recipient.blood,

                hospital:
                    recipient.hospital,

                urgency:
                    recipient.urgency,

                status:
                    recipient.status

            })
        );


    renderAuthState();

    renderData();


    if (
        inventoryResult.error
    ) {

        showToast(
            "Organ availability could not load",
            inventoryResult.error.message
        );

    }

    else if (
        inventoryHistoryResult.error
    ) {

        showToast(

            "Availability history needs setup",

            "Run supabase-inventory-history-migration.sql. Current availability will still load."

        );

    }

    else {

        const failedQuery =
            [
                profileResult,
                donorResult,
                recipientResult,
                matchResult
            ]
            .find(
                result =>
                    result.error
            );


        if (failedQuery) {

            showToast(
                "Some records could not load",
                failedQuery.error.message
            );

        }

    }

}


/* =========================================================
   INITIALIZE SUPABASE
========================================================= */

async function initializeSupabase() {

    const config =
        window.LIFELINK_SUPABASE_CONFIG;


    if (

        !config?.url ||

        !config?.anonKey ||

        config.url.includes(
            "YOUR_PROJECT"
        ) ||

        config.anonKey.includes(
            "YOUR_SUPABASE"
        ) ||

        !window.supabase?.createClient

    ) {

        /*
            IMPORTANT:

            Supabase is optional for the public demo.

            The demo inventory still works.
        */

        renderAuthState();

        return;

    }


    supabaseClient =
        window.supabase.createClient(
            config.url,
            config.anonKey
        );


    supabaseClient.auth.onAuthStateChange(
        (_event, session) => {

            window.setTimeout(
                () => {

                    currentUser =
                        session?.user ||
                        null;

                    loadApplicationData();

                },
                0
            );

        }
    );


    const {
        data,
        error
    } =
        await supabaseClient
            .auth
            .getSession();


    if (error) {

        showToast(
            "Authentication error",
            error.message
        );

        return;

    }


    currentUser =
        data.session?.user ||
        null;


    await loadApplicationData();

}


/* =========================================================
   AUTHENTICATION REQUIRED
========================================================= */

function requireAuthentication() {

    if (
        currentUser &&
        supabaseClient
    ) {

        return true;

    }


    loginModal.classList.add(
        "active"
    );


    showToast(

        supabaseClient

            ? "Sign in required"

            : "Supabase setup needed",

        supabaseClient

            ? "Create an account or sign in before submitting a record."

            : "Configure Supabase before submitting a record."

    );


    return false;

}


/* =========================================================
   TOGGLE AUTHENTICATION
========================================================= */

async function toggleAuthentication(
    event
) {

    event?.preventDefault();


    if (
        currentUser &&
        supabaseClient
    ) {

        const {
            error
        } =
            await supabaseClient
                .auth
                .signOut();


        if (error) {

            showToast(
                "Sign out failed",
                error.message
            );

            return;

        }


        currentUser =
            null;


        clearPrivateData();


        showToast(
            "Signed out",
            "Your account has been signed out."
        );


        return;

    }


    loginModal.classList.add(
        "active"
    );

}


/* =========================================================
   DONOR REGISTRATION
========================================================= */

donorForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        if (
            !requireAuthentication()
        ) {

            return;

        }


        const donor = {

            name:
                document
                    .getElementById(
                        "donorName"
                    )
                    .value
                    .trim(),

            age:
                Number(
                    document
                        .getElementById(
                            "donorAge"
                        )
                        .value
                ),

            blood_group:
                document
                    .getElementById(
                        "donorBlood"
                    )
                    .value,

            organ:
                document
                    .getElementById(
                        "donorOrgan"
                    )
                    .value,

            city:
                document
                    .getElementById(
                        "donorCity"
                    )
                    .value
                    .trim(),

            phone:
                document
                    .getElementById(
                        "donorPhone"
                    )
                    .value
                    .trim(),

            owner_id:
                currentUser.id,

            consent:
                document
                    .getElementById(
                        "donorConsent"
                    )
                    .checked

        };


        const {
            error
        } =
            await supabaseClient
                .from("donors")
                .insert(
                    donor
                );


        if (error) {

            showToast(
                "Donor registration failed",
                error.message
            );

            return;

        }


        donorForm.reset();


        await loadApplicationData();


        showToast(
            "Donor Registered",
            `${donor.name} has been successfully added.`
        );

    }
);


/* =========================================================
   INVENTORY ADD
========================================================= */

inventoryForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        if (

            !currentUser ||

            ![
                "hospital",
                "admin"
            ].includes(
                currentAppRole
            )

        ) {

            showToast(

                "Staff access required",

                "Only approved hospital staff can report organ availability."

            );

            return;

        }


        const {
            error
        } =
            await supabaseClient
                .from("inventory")
                .insert({

                    owner_id:
                        currentUser.id,

                    organ:
                        document
                            .getElementById(
                                "inventoryOrgan"
                            )
                            .value,

                    blood_group:
                        document
                            .getElementById(
                                "inventoryBlood"
                            )
                            .value,

                    hospital_name:
                        document
                            .getElementById(
                                "inventoryHospital"
                            )
                            .value,

                    status:
                        document
                            .getElementById(
                                "inventoryStatus"
                            )
                            .value

                });


        if (error) {

            showToast(
                "Availability was not added",
                error.message
            );

            return;

        }


        inventoryForm.reset();


        await loadApplicationData();


        showToast(
            "Availability added",
            "The organ is now listed in inventory."
        );

    }
);


/* =========================================================
   INVENTORY UPDATE
========================================================= */

inventoryBody.addEventListener(
    "click",
    async function(event) {

        const saveButton =
            event.target.closest(
                "[data-inventory-save]"
            );


        if (!saveButton) {

            return;

        }


        const item =
            inventory.find(
                record =>
                    record.id ===
                    saveButton.dataset
                        .inventorySave
            );


        const nextStatus =
            saveButton
                .closest("tr")
                .querySelector(
                    "[data-inventory-status]"
                )
                .value;


        if (
            !item ||
            item.ownerId !==
                currentUser?.id
        ) {

            showToast(
                "Update not allowed",
                "You can only update inventory reported by your hospital."
            );

            return;

        }


        if (
            item.status ===
            nextStatus
        ) {

            showToast(
                "No change made",
                "Choose a different availability status first."
            );

            return;

        }


        saveButton.disabled =
            true;


        const {
            data,
            error
        } =
            await supabaseClient
                .from("inventory")
                .update({

                    status:
                        nextStatus,

                    updated_at:
                        new Date()
                            .toISOString()

                })
                .eq(
                    "id",
                    item.id
                )
                .eq(
                    "owner_id",
                    currentUser.id
                )
                .select("id")
                .maybeSingle();


        if (
            error ||
            !data
        ) {

            saveButton.disabled =
                false;


            showToast(

                "Availability was not updated",

                error?.message ||
                    "The record could not be updated."

            );

            return;

        }


        await loadApplicationData();


        showToast(
            "Availability updated",
            "The change was added to organ availability history."
        );

    }
);


/* =========================================================
   RECIPIENT REGISTRATION
========================================================= */

recipientForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        if (
            !requireAuthentication()
        ) {

            return;

        }


        const recipient = {

            name:
                document
                    .getElementById(
                        "recipientName"
                    )
                    .value
                    .trim(),

            age:
                Number(
                    document
                        .getElementById(
                            "recipientAge"
                        )
                        .value
                ),

            blood_group:
                document
                    .getElementById(
                        "recipientBlood"
                    )
                    .value,

            organ:
                document
                    .getElementById(
                        "recipientOrgan"
                    )
                    .value,

            urgency:
                document
                    .getElementById(
                        "recipientUrgency"
                    )
                    .value,

            hospital:
                document
                    .getElementById(
                        "recipientHospital"
                    )
                    .value,

            phone:
                document
                    .getElementById(
                        "recipientPhone"
                    )
                    .value
                    .trim(),

            owner_id:
                currentUser.id,

            status:
                "AI Match Pending"

        };


        const {
            error
        } =
            await supabaseClient
                .from("recipients")
                .insert(
                    recipient
                );


        if (error) {

            showToast(
                "Request registration failed",
                error.message
            );

            return;

        }


        recipientForm.reset();


        await loadApplicationData();


        showToast(
            "Request Registered",
            `${recipient.name}'s organ request has been added.`
        );

    }
);


/* =========================================================
   AI MATCHING ENGINE
========================================================= */

function calculateMatchScore(
    donor,
    organ,
    blood,
    urgency
) {

    let score = 0;

    let reasons = [];


    /* Organ */

    if (
        donor.organ ===
        organ
    ) {

        score += 50;

        reasons.push(
            "Organ type matches"
        );

    }


    /* Blood */

    if (
        donor.blood ===
        blood
    ) {

        score += 35;

        reasons.push(
            "Blood group matches"
        );

    }


    /* Location */

    if (
        donor.city.toLowerCase() ===
        "bengaluru"
    ) {

        score += 5;

        reasons.push(
            "Local donor network"
        );

    }


    /* Urgency */

    if (
        urgency ===
        "Critical"
    ) {

        score += 10;

        reasons.push(
            "Critical request priority"
        );

    }

    else if (
        urgency ===
        "High"
    ) {

        score += 7;

        reasons.push(
            "High request priority"
        );

    }

    else {

        score += 3;

        reasons.push(
            "Priority evaluated"
        );

    }


    return {

        score:
            Math.min(
                score,
                100
            ),

        reasons

    };

}


/* =========================================================
   AI MATCH FORM
========================================================= */

matchForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        if (
            !requireAuthentication()
        ) {

            return;

        }


        const organ =
            document
                .getElementById(
                    "matchOrgan"
                )
                .value;


        const blood =
            document
                .getElementById(
                    "matchBlood"
                )
                .value;


        const urgency =
            document
                .getElementById(
                    "matchUrgency"
                )
                .value;


        /*
            Matching:

            First filter by organ.

            Then calculate score using:
            blood group,
            location,
            urgency.
        */

        const candidates =
            donors.filter(
                donor =>
                    donor.organ ===
                    organ
            );


        const scoredMatches =
            candidates.map(
                donor => {

                    const result =
                        calculateMatchScore(
                            donor,
                            organ,
                            blood,
                            urgency
                        );


                    return {

                        donor,

                        ...result

                    };

                }
            );


        scoredMatches.sort(
            (a, b) =>
                b.score -
                a.score
        );


        const topMatches =
            scoredMatches.slice(
                0,
                5
            );


        const {
            error: historyError
        } =
            await supabaseClient
                .from("match_history")
                .insert({

                    owner_id:
                        currentUser.id,

                    organ,

                    blood_group:
                        blood,

                    urgency,

                    match_count:
                        topMatches.length

                });


        if (historyError) {

            showToast(
                "Could not save match history",
                historyError.message
            );

            return;

        }


        matchHistory.unshift({

            id:
                Date.now(),

            organ,

            blood,

            urgency,

            matchCount:
                topMatches.length,

            timestamp:
                new Date()
                    .toLocaleString()

        });


        updateStats();


        /* =================================================
           NO MATCH
        ================================================= */

        if (
            !topMatches.length
        ) {

            matchResults.innerHTML = `

                <div class="empty-match">

                    <div class="empty-icon">

                        <i
                            class="
                                fa-solid
                                fa-magnifying-glass
                            "
                        ></i>

                    </div>


                    <h3>
                        No Donor Found
                    </h3>


                    <p>

                        No donor has registered
                        for
                        ${escapeHtml(organ)}
                        yet.

                    </p>


                    <p
                        style="
                            margin-top:10px;
                            font-size:10px;
                        "
                    >

                        Matching results are limited
                        to records your account is
                        allowed to access.

                    </p>

                </div>

            `;

            return;

        }


        /* =================================================
           MATCH RESULTS
        ================================================= */

        matchResults.innerHTML = `

            <h3
                class="match-title"
            >

                <i
                    class="
                        fa-solid
                        fa-wand-magic-sparkles
                    "
                    style="
                        color:#0b63f6;
                    "
                ></i>

                AI Match Results

            </h3>


            <p
                style="
                    color:#64748b;
                    font-size:11px;
                    margin-bottom:18px;
                "
            >

                ${topMatches.length}

                potential donor(s)
                found for

                <strong>
                    ${escapeHtml(organ)}
                </strong>

                /

                ${escapeHtml(blood)}

                /

                ${escapeHtml(urgency)}

            </p>


            ${

                topMatches
                    .map(
                        item => `

                            <div
                                class="match-item"
                            >

                                <div
                                    class="match-avatar"
                                >

                                    ${escapeHtml(
                                        item.donor.name
                                            .charAt(0)
                                            .toUpperCase()
                                    )}

                                </div>


                                <div
                                    class="match-info"
                                >

                                    <strong>

                                        ${escapeHtml(
                                            item.donor.name
                                        )}

                                    </strong>


                                    <span>

                                        ${escapeHtml(
                                            item.donor.organ
                                        )}

                                        •

                                        ${escapeHtml(
                                            item.donor.blood
                                        )}

                                        •

                                        ${escapeHtml(
                                            item.donor.city
                                        )}

                                    </span>


                                    <div
                                        class="match-reason"
                                    >

                                        ${item.reasons.join(
                                            " • "
                                        )}

                                    </div>

                                </div>


                                <span
                                    class="match-score"
                                >

                                    ${item.score}%

                                </span>

                            </div>

                        `
                    )
                    .join("")

            }


            <div
                style="
                    margin-top:18px;
                    padding:14px;
                    border-radius:12px;
                    background:#fff7ed;
                    border:1px solid #fed7aa;
                    color:#9a3412;
                    font-size:10px;
                "
            >

                <strong>
                    Prototype Notice:
                </strong>


                This score is a demonstration
                algorithm only. Real organ
                allocation requires verified
                medical, legal and clinical
                criteria.

            </div>

        `;


        showToast(
            "AI Matching Complete",
            `${topMatches.length} potential donor matches found.`
        );

    }
);


/* =========================================================
   HOSPITAL SEARCH
========================================================= */

hospitalSearch.addEventListener(
    "input",
    function() {

        renderHospitals(
            this.value
        );

    }
);


/* =========================================================
   LOGIN MODAL
========================================================= */

document
    .getElementById(
        "openLogin"
    )
    .addEventListener(
        "click",
        toggleAuthentication
    );


document
    .getElementById(
        "mobileAuth"
    )
    .addEventListener(
        "click",
        toggleAuthentication
    );


document
    .getElementById(
        "closeLogin"
    )
    .addEventListener(
        "click",
        function() {

            loginModal.classList.remove(
                "active"
            );

        }
    );


loginModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            loginModal
        ) {

            loginModal.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================================
   AUTHENTICATION
========================================================= */

document
    .getElementById(
        "loginForm"
    )
    .addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const email =
                document
                    .getElementById(
                        "loginEmail"
                    )
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById(
                        "loginPassword"
                    )
                    .value;


            if (
                !supabaseClient
            ) {

                showToast(
                    "Supabase setup needed",
                    "Add your project URL and anon key in supabase-config.js."
                );

                return;

            }


            let result;


            if (
                isSignUpMode
            ) {

                const displayName =
                    document
                        .getElementById(
                            "signupName"
                        )
                        .value
                        .trim();


                result =
                    await supabaseClient
                        .auth
                        .signUp({

                            email,

                            password,

                            options: {

                                data: {

                                    display_name:
                                        displayName

                                }

                            }

                        });

            }

            else {

                result =
                    await supabaseClient
                        .auth
                        .signInWithPassword({

                            email,

                            password

                        });

            }


            if (
                result.error
            ) {

                showToast(

                    isSignUpMode
                        ? "Sign up failed"
                        : "Login failed",

                    result.error.message

                );

                return;

            }


            if (
                isSignUpMode &&
                !result.data.session
            ) {

                loginModal.classList.remove(
                    "active"
                );


                showToast(
                    "Check your email",
                    "Confirm your email address, then sign in."
                );

            }

            else {

                currentUser =
                    result.data.user;


                loginModal.classList.remove(
                    "active"
                );


                await loadApplicationData();


                showToast(

                    isSignUpMode
                        ? "Account created"
                        : "Login successful",

                    "Signed in as " +
                    email +
                    "."

                );

            }


            this.reset();

        }
    );


/* =========================================================
   LOGIN / SIGNUP MODE
========================================================= */

document
    .getElementById(
        "authModeToggle"
    )
    .addEventListener(
        "click",
        function() {

            isSignUpMode =
                !isSignUpMode;


            document
                .getElementById(
                    "signupNameGroup"
                )
                .hidden =
                !isSignUpMode;


            document
                .getElementById(
                    "signupName"
                )
                .required =
                isSignUpMode;


            document
                .getElementById(
                    "loginTitle"
                )
                .textContent =

                isSignUpMode

                    ? "Create Account"

                    : "Welcome Back";


            document
                .getElementById(
                    "loginDescription"
                )
                .textContent =

                isSignUpMode

                    ? "Create an account to register and manage your records."

                    : "Sign in to your LifeLink account.";


            document
                .getElementById(
                    "authSubmitLabel"
                )
                .textContent =

                isSignUpMode

                    ? "Create account"

                    : "Login";


            this.textContent =

                isSignUpMode

                    ? "Already have an account? Sign in"

                    : "New to LifeLink? Create an account";

        }
    );


/* =========================================================
   LOGOUT BUTTON
========================================================= */

document
    .getElementById(
        "logoutBtn"
    )
    .addEventListener(
        "click",
        async function() {

            if (
                !supabaseClient
            ) {

                return;

            }


            const {
                error
            } =
                await supabaseClient
                    .auth
                    .signOut();


            if (error) {

                showToast(
                    "Sign out failed",
                    error.message
                );

                return;

            }


            currentUser =
                null;


            clearPrivateData();


            showToast(
                "Signed out",
                "Your account has been signed out."
            );

        }
    );


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const navbar =
    document.getElementById(
        "navbar"
    );


menuBtn.addEventListener(
    "click",
    function() {

        navbar.classList.toggle(
            "active"
        );

    }
);


navbar
    .querySelectorAll("a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                function() {

                    navbar.classList.remove(
                        "active"
                    );

                }
            );

        }
    );


/* =========================================================
   CLOSE TOAST
========================================================= */

document
    .getElementById(
        "closeToast"
    )
    .addEventListener(
        "click",
        function() {

            toast.classList.remove(
                "show"
            );

        }
    );


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();


/* =========================================================
   INITIALIZE APPLICATION
========================================================= */

renderHospitals();

populateHospitalSelect();

renderData();

initializeSupabase();


/* =========================================================
   CONSOLE
========================================================= */

console.log(

    "%cLifeLink Organ Donation Management System",

    "font-size:18px;font-weight:bold;color:#0b63f6;"

);


console.log(
    "Hackathon Prototype"
);


console.log(
    "Supabase-backed records are loaded after authentication."
);