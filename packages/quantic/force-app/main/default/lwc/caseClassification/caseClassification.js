import { initializeComponent } from 'c/initialization';
import { LightningElement, api, track} from 'lwc';

export default class CaseClassification extends LightningElement {

    @track state = {
        fields: [],
        responseId: '',
        loading: false,
        error: null
    };
    unsubscribe;
    caseAssist;

    connectedCallback() {
        initializeComponent(this);
    }

    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    @api
    initialize(engine) {
        this.caseAssist = CoveoHeadless.buildCaseAssist(engine);
        this.unsubscribe = this.caseAssist.subscribe(() => this.updateState());
    }

    updateState() {
        this.state = this.caseAssist.state.classifications;
    }

    get hasClassifications() {
        return !this.state.loading && !this.state.error && this.state.fields.length > 0;
    }
}
