"use strict";
exports.id = 676;
exports.ids = [676,431,461,61,209];
exports.modules = {

/***/ 9042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$9": () => (/* binding */ DEFAULT_PIPELINE_STATUS),
/* harmony export */   "Ak": () => (/* binding */ READY_FOR_MERGE_PR_LABEL),
/* harmony export */   "Cb": () => (/* binding */ MERGE_QUEUE_STATUS),
/* harmony export */   "Cc": () => (/* binding */ GITHUB_OPTIONS),
/* harmony export */   "Ee": () => (/* binding */ QUEUED_FOR_MERGE_PREFIX),
/* harmony export */   "HW": () => (/* binding */ DEFAULT_PR_TITLE_REGEX),
/* harmony export */   "Hc": () => (/* binding */ PRODUCTION_ENVIRONMENT),
/* harmony export */   "IH": () => (/* binding */ FIRST_QUEUED_PR_LABEL),
/* harmony export */   "K5": () => (/* binding */ SECONDS_IN_A_DAY),
/* harmony export */   "Km": () => (/* binding */ DEFAULT_PIPELINE_DESCRIPTION),
/* harmony export */   "Xt": () => (/* binding */ PEER_APPROVED_PR_LABEL),
/* harmony export */   "_d": () => (/* binding */ CORE_APPROVED_PR_LABEL),
/* harmony export */   "aT": () => (/* binding */ ALMOST_OVERDUE_ISSUE),
/* harmony export */   "fy": () => (/* binding */ LATE_REVIEW),
/* harmony export */   "gd": () => (/* binding */ PRIORITY_TO_DAYS_MAP),
/* harmony export */   "nJ": () => (/* binding */ JUMP_THE_QUEUE_PR_LABEL),
/* harmony export */   "rF": () => (/* binding */ PRIORITY_LABELS),
/* harmony export */   "wH": () => (/* binding */ OVERDUE_ISSUE)
/* harmony export */ });
/* unused harmony exports DEFAULT_EXEMPT_DESCRIPTION, PRIORITY_1, PRIORITY_2, PRIORITY_3, PRIORITY_4, COPYRIGHT_HEADER */
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// These extra headers are for experimental API features on Github Enterprise. See https://docs.github.com/en/enterprise-server@3.0/rest/overview/api-previews for details.
const PREVIEWS = ['ant-man', 'flash', 'groot', 'inertia', 'starfox'];
const GITHUB_OPTIONS = {
    headers: {
        accept: PREVIEWS.map(preview => `application/vnd.github.${preview}-preview+json`).join()
    }
};
const SECONDS_IN_A_DAY = 86400000;
const DEFAULT_EXEMPT_DESCRIPTION = 'Passed in case the check is exempt.';
const DEFAULT_PIPELINE_STATUS = 'Pipeline Status';
const DEFAULT_PIPELINE_DESCRIPTION = 'Pipeline clear.';
const PRODUCTION_ENVIRONMENT = 'production';
const LATE_REVIEW = 'Late Review';
const OVERDUE_ISSUE = 'Overdue';
const ALMOST_OVERDUE_ISSUE = 'Due Soon';
const PRIORITY_1 = 'Priority: Critical';
const PRIORITY_2 = 'Priority: High';
const PRIORITY_3 = 'Priority: Medium';
const PRIORITY_4 = 'Priority: Low';
const PRIORITY_LABELS = [PRIORITY_1, PRIORITY_2, PRIORITY_3, PRIORITY_4];
const PRIORITY_TO_DAYS_MAP = {
    [PRIORITY_1]: 2,
    [PRIORITY_2]: 14,
    [PRIORITY_3]: 45,
    [PRIORITY_4]: 90
};
const CORE_APPROVED_PR_LABEL = 'CORE APPROVED';
const PEER_APPROVED_PR_LABEL = 'PEER APPROVED';
const READY_FOR_MERGE_PR_LABEL = 'READY FOR MERGE';
const MERGE_QUEUE_STATUS = 'QUEUE CHECKER';
const QUEUED_FOR_MERGE_PREFIX = 'QUEUED FOR MERGE';
const FIRST_QUEUED_PR_LABEL = `${QUEUED_FOR_MERGE_PREFIX} #1`;
const JUMP_THE_QUEUE_PR_LABEL = 'JUMP THE QUEUE';
const DEFAULT_PR_TITLE_REGEX = '^(build|ci|chore|docs|feat|fix|perf|refactor|style|test|revert|Revert|BREAKING CHANGE)((.*))?: .+$';
const COPYRIGHT_HEADER = (/* unused pure expression or super */ null && (`/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/`));


/***/ }),

/***/ 9431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ApprovalsSatisfied": () => (/* binding */ ApprovalsSatisfied),
  "approvalsSatisfied": () => (/* binding */ approvalsSatisfied)
});

// EXTERNAL MODULE: ./src/types/generated.ts
var generated = __webpack_require__(3476);
// EXTERNAL MODULE: ./node_modules/@actions/github/lib/github.js
var github = __webpack_require__(5438);
// EXTERNAL MODULE: ./src/octokit.ts
var octokit = __webpack_require__(6161);
// EXTERNAL MODULE: ./src/utils/get-core-member-logins.ts
var get_core_member_logins = __webpack_require__(7290);
// EXTERNAL MODULE: ./node_modules/bluebird/js/release/bluebird.js
var bluebird = __webpack_require__(8710);
// EXTERNAL MODULE: ./src/utils/convert-to-team-slug.ts
var convert_to_team_slug = __webpack_require__(489);
// EXTERNAL MODULE: ./node_modules/@actions/core/lib/core.js
var core = __webpack_require__(2186);
;// CONCATENATED MODULE: ./src/utils/paginate-all-reviews.ts
/*
Copyright 2022 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const paginateAllReviews = (prNumber, page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield octokit/* octokit.pulls.listReviews */.K.pulls.listReviews(Object.assign({ pull_number: prNumber, per_page: 100, page }, github.context.repo));
    if (!response.data.length) {
        return [];
    }
    return response.data.concat(yield paginateAllReviews(prNumber, page + 1));
});

;// CONCATENATED MODULE: ./src/helpers/approvals-satisfied.ts
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var approvals_satisfied_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class ApprovalsSatisfied extends generated/* HelperInputs */.s {
}
const approvalsSatisfied = ({ teams, number_of_reviewers = '1', pull_number } = {}) => approvals_satisfied_awaiter(void 0, void 0, void 0, function* () {
    const prNumber = pull_number ? Number(pull_number) : github.context.issue.number;
    const reviews = yield paginateAllReviews(prNumber);
    const approverLogins = reviews
        .filter(({ state }) => state === 'APPROVED')
        .map(({ user }) => user === null || user === void 0 ? void 0 : user.login)
        .filter(Boolean);
    core.debug(`PR already approved by: ${approverLogins.toString()}`);
    const teamsList = teams === null || teams === void 0 ? void 0 : teams.split('\n');
    const requiredCodeOwnersEntries = teamsList ? createArtificialCodeOwnersEntry(teamsList) : yield (0,get_core_member_logins/* getRequiredCodeOwnersEntries */.q)(prNumber);
    const requiredCodeOwnersEntriesWithOwners = requiredCodeOwnersEntries.filter(({ owners }) => owners.length);
    const codeOwnersEntrySatisfiesApprovals = (entry) => approvals_satisfied_awaiter(void 0, void 0, void 0, function* () {
        const teamsAndLoginsLists = yield (0,bluebird.map)(entry.owners, (team) => approvals_satisfied_awaiter(void 0, void 0, void 0, function* () {
            const { data } = yield octokit/* octokit.teams.listMembersInOrg */.K.teams.listMembersInOrg({
                org: github.context.repo.owner,
                team_slug: (0,convert_to_team_slug/* convertToTeamSlug */.$)(team),
                per_page: 100
            });
            return data.map(({ login }) => ({ team, login }));
        }));
        const codeOwnerLogins = teamsAndLoginsLists.flat().map(({ login }) => login);
        const numberOfCollectiveApprovalsAcrossTeams = approverLogins.filter(login => codeOwnerLogins.includes(login)).length;
        const numberOfApprovalsForSingleTeam = codeOwnerLogins.filter(login => approverLogins.includes(login)).length;
        const numberOfApprovals = entry.owners.length > 1 ? numberOfCollectiveApprovalsAcrossTeams : numberOfApprovalsForSingleTeam;
        core.debug(`Current number of approvals satisfied for ${entry.owners}: ${numberOfApprovals}`);
        return numberOfApprovals >= Number(number_of_reviewers);
    });
    core.debug(`Required code owners: ${requiredCodeOwnersEntriesWithOwners.map(({ owners }) => owners).toString()}`);
    const booleans = yield Promise.all(requiredCodeOwnersEntriesWithOwners.map(codeOwnersEntrySatisfiesApprovals));
    return booleans.every(Boolean);
});
const createArtificialCodeOwnersEntry = (teams) => teams.map(team => ({ owners: [team] }));


/***/ }),

/***/ 3461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePrComment": () => (/* binding */ CreatePrComment),
/* harmony export */   "createPrComment": () => (/* binding */ createPrComment)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9042);
/* harmony import */ var _types_generated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3476);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6161);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class CreatePrComment extends _types_generated__WEBPACK_IMPORTED_MODULE_3__/* .HelperInputs */ .s {
    constructor() {
        super(...arguments);
        this.body = '';
    }
}
const emptyResponse = { data: [] };
const getPrsByCommit = (sha) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const prs = (sha &&
        (yield _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.repos.listPullRequestsAssociatedWithCommit */ .K.repos.listPullRequestsAssociatedWithCommit(Object.assign(Object.assign({ commit_sha: sha }, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo), _constants__WEBPACK_IMPORTED_MODULE_0__/* .GITHUB_OPTIONS */ .Cc)))) ||
        emptyResponse;
    return (_a = prs.data.find(Boolean)) === null || _a === void 0 ? void 0 : _a.number;
});
const getCommentByUser = (login) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const comments = (login &&
        (yield _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.issues.listComments */ .K.issues.listComments(Object.assign({ issue_number: _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.issue.number }, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo)))) ||
        emptyResponse;
    return (_b = comments.data.find(comment => { var _a; return ((_a = comment === null || comment === void 0 ? void 0 : comment.user) === null || _a === void 0 ? void 0 : _a.login) === login; })) === null || _b === void 0 ? void 0 : _b.id;
});
const createPrComment = ({ body, sha, login }) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    if (!sha && !login) {
        return _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.issues.createComment */ .K.issues.createComment(Object.assign({ body, issue_number: _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.issue.number }, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo));
    }
    const defaultPrNumber = _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.issue.number;
    const prNumber = (_c = (yield getPrsByCommit(sha))) !== null && _c !== void 0 ? _c : defaultPrNumber;
    const commentId = yield getCommentByUser(login);
    if (commentId) {
        return _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.issues.updateComment */ .K.issues.updateComment(Object.assign({ comment_id: commentId, body }, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo));
    }
    else {
        return _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.issues.createComment */ .K.issues.createComment(Object.assign({ body, issue_number: prNumber }, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo));
    }
});


/***/ }),

/***/ 7473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ManageMergeQueue": () => (/* binding */ ManageMergeQueue),
  "enableAutoMerge": () => (/* binding */ enableAutoMerge),
  "manageMergeQueue": () => (/* binding */ manageMergeQueue),
  "removePrFromQueue": () => (/* binding */ removePrFromQueue)
});

// EXTERNAL MODULE: ./node_modules/@actions/core/lib/core.js
var core = __webpack_require__(2186);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(9042);
// EXTERNAL MODULE: ./src/types/generated.ts
var generated = __webpack_require__(3476);
// EXTERNAL MODULE: ./node_modules/@actions/github/lib/github.js
var github = __webpack_require__(5438);
// EXTERNAL MODULE: ./node_modules/bluebird/js/release/bluebird.js
var bluebird = __webpack_require__(8710);
// EXTERNAL MODULE: ./src/utils/notify-user.ts
var notify_user = __webpack_require__(9938);
// EXTERNAL MODULE: ./src/octokit.ts
var octokit = __webpack_require__(6161);
// EXTERNAL MODULE: ./src/helpers/remove-label.ts
var remove_label = __webpack_require__(61);
// EXTERNAL MODULE: ./src/helpers/set-commit-status.ts
var set_commit_status = __webpack_require__(2209);
// EXTERNAL MODULE: ./src/helpers/prepare-queued-pr-for-merge.ts
var prepare_queued_pr_for_merge = __webpack_require__(1004);
;// CONCATENATED MODULE: ./src/utils/update-merge-queue.ts
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const updateMergeQueue = (queuedPrs) => {
    const sortedPrs = sortPrsByQueuePosition(queuedPrs);
    return (0,bluebird.map)(sortedPrs, updateQueuePosition);
};
const sortPrsByQueuePosition = (queuedPrs) => queuedPrs
    .map(pr => {
    var _a, _b;
    const label = (_a = pr.labels.find(label => { var _a; return (_a = label.name) === null || _a === void 0 ? void 0 : _a.startsWith(constants/* QUEUED_FOR_MERGE_PREFIX */.Ee); })) === null || _a === void 0 ? void 0 : _a.name;
    const isJumpingTheQueue = Boolean(pr.labels.find(label => label.name === constants/* JUMP_THE_QUEUE_PR_LABEL */.nJ));
    const queuePosition = isJumpingTheQueue ? 0 : Number((_b = label === null || label === void 0 ? void 0 : label.split('#')) === null || _b === void 0 ? void 0 : _b[1]);
    return {
        number: pr.number,
        label,
        queuePosition,
        sha: pr.head.sha
    };
})
    .sort((pr1, pr2) => pr1.queuePosition - pr2.queuePosition);
const updateQueuePosition = (pr, index) => __awaiter(void 0, void 0, void 0, function* () {
    const { number, label, queuePosition, sha } = pr;
    const newQueuePosition = index + 1;
    if (!label || isNaN(queuePosition) || queuePosition === newQueuePosition) {
        return;
    }
    const prIsNowFirstInQueue = newQueuePosition === 1;
    if (prIsNowFirstInQueue) {
        const { data: firstPrInQueue } = yield octokit/* octokit.pulls.get */.K.pulls.get(Object.assign({ pull_number: number }, github.context.repo));
        yield Promise.all([(0,remove_label.removeLabelIfExists)(constants/* JUMP_THE_QUEUE_PR_LABEL */.nJ, number), (0,prepare_queued_pr_for_merge.updatePrWithDefaultBranch)(firstPrInQueue)]);
        const { data: { head: { sha: updatedHeadSha } } } = yield octokit/* octokit.pulls.get */.K.pulls.get(Object.assign({ pull_number: number }, github.context.repo));
        return Promise.all([
            octokit/* octokit.issues.addLabels */.K.issues.addLabels(Object.assign({ labels: [`${constants/* QUEUED_FOR_MERGE_PREFIX */.Ee} #${newQueuePosition}`], issue_number: number }, github.context.repo)),
            (0,remove_label.removeLabelIfExists)(label, number),
            (0,set_commit_status.setCommitStatus)({
                sha: updatedHeadSha,
                context: constants/* MERGE_QUEUE_STATUS */.Cb,
                state: 'success',
                description: 'This PR is next to merge.'
            })
        ]);
    }
    return Promise.all([
        octokit/* octokit.issues.addLabels */.K.issues.addLabels(Object.assign({ labels: [`${constants/* QUEUED_FOR_MERGE_PREFIX */.Ee} #${newQueuePosition}`], issue_number: number }, github.context.repo)),
        (0,remove_label.removeLabelIfExists)(label, number),
        (0,set_commit_status.setCommitStatus)({
            sha,
            context: constants/* MERGE_QUEUE_STATUS */.Cb,
            state: 'pending',
            description: 'This PR is in line to merge.'
        })
    ]);
});

// EXTERNAL MODULE: ./src/utils/paginate-open-pull-requests.ts
var paginate_open_pull_requests = __webpack_require__(5757);
// EXTERNAL MODULE: ./src/helpers/approvals-satisfied.ts + 1 modules
var approvals_satisfied = __webpack_require__(9431);
// EXTERNAL MODULE: ./src/helpers/create-pr-comment.ts
var create_pr_comment = __webpack_require__(3461);
;// CONCATENATED MODULE: ./src/helpers/manage-merge-queue.ts
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var manage_merge_queue_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














class ManageMergeQueue extends generated/* HelperInputs */.s {
}
const manageMergeQueue = ({ login, slack_webhook_url } = {}) => manage_merge_queue_awaiter(void 0, void 0, void 0, function* () {
    const { data: pullRequest } = yield octokit/* octokit.pulls.get */.K.pulls.get(Object.assign({ pull_number: github.context.issue.number }, github.context.repo));
    if (pullRequest.merged || !pullRequest.labels.find(label => label.name === constants/* READY_FOR_MERGE_PR_LABEL */.Ak)) {
        core.info('This PR is not in the merge queue.');
        return removePrFromQueue(pullRequest);
    }
    const prMeetsRequiredApprovals = yield (0,approvals_satisfied.approvalsSatisfied)();
    if (!prMeetsRequiredApprovals) {
        yield (0,create_pr_comment.createPrComment)({ body: 'PRs must meet all required approvals before entering the merge queue.' });
        return removePrFromQueue(pullRequest);
    }
    const queuedPrs = yield getQueuedPullRequests();
    const queuePosition = queuedPrs.length;
    if (pullRequest.labels.find(label => label.name === constants/* JUMP_THE_QUEUE_PR_LABEL */.nJ)) {
        return updateMergeQueue(queuedPrs);
    }
    if (!pullRequest.labels.find(label => { var _a; return (_a = label.name) === null || _a === void 0 ? void 0 : _a.startsWith(constants/* QUEUED_FOR_MERGE_PREFIX */.Ee); })) {
        yield addPrToQueue(pullRequest, queuePosition);
    }
    const isFirstQueuePosition = queuePosition === 1 || pullRequest.labels.find(label => label.name === constants/* FIRST_QUEUED_PR_LABEL */.IH);
    if (isFirstQueuePosition) {
        yield (0,prepare_queued_pr_for_merge.updatePrWithDefaultBranch)(pullRequest);
    }
    yield (0,set_commit_status.setCommitStatus)({
        sha: pullRequest.head.sha,
        context: constants/* MERGE_QUEUE_STATUS */.Cb,
        state: isFirstQueuePosition ? 'success' : 'pending',
        description: isFirstQueuePosition ? 'This PR is next to merge.' : 'This PR is in line to merge.'
    });
    if (isFirstQueuePosition && slack_webhook_url && login) {
        yield (0,notify_user/* notifyUser */.b)({
            login,
            pull_number: github.context.issue.number,
            slack_webhook_url
        });
    }
});
const removePrFromQueue = (pullRequest) => manage_merge_queue_awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const queueLabel = (_a = pullRequest.labels.find(label => { var _a; return (_a = label.name) === null || _a === void 0 ? void 0 : _a.startsWith(constants/* QUEUED_FOR_MERGE_PREFIX */.Ee); })) === null || _a === void 0 ? void 0 : _a.name;
    if (queueLabel) {
        yield (0,bluebird.map)([constants/* READY_FOR_MERGE_PR_LABEL */.Ak, queueLabel], (label) => manage_merge_queue_awaiter(void 0, void 0, void 0, function* () { return (0,remove_label.removeLabelIfExists)(label, pullRequest.number); }));
        yield (0,set_commit_status.setCommitStatus)({
            sha: pullRequest.head.sha,
            context: constants/* MERGE_QUEUE_STATUS */.Cb,
            state: 'pending',
            description: 'This PR is not in the merge queue.'
        });
        const queuedPrs = yield getQueuedPullRequests();
        yield updateMergeQueue(queuedPrs);
    }
});
const addPrToQueue = (pullRequest, queuePosition) => manage_merge_queue_awaiter(void 0, void 0, void 0, function* () {
    return Promise.all([
        octokit/* octokit.issues.addLabels */.K.issues.addLabels(Object.assign({ labels: [`${constants/* QUEUED_FOR_MERGE_PREFIX */.Ee} #${queuePosition}`], issue_number: github.context.issue.number }, github.context.repo)),
        enableAutoMerge(pullRequest.node_id)
    ]);
});
const getQueuedPullRequests = () => manage_merge_queue_awaiter(void 0, void 0, void 0, function* () {
    const openPullRequests = yield (0,paginate_open_pull_requests/* paginateAllOpenPullRequests */.P)();
    return openPullRequests.filter(pr => pr.labels.some(label => label.name === constants/* READY_FOR_MERGE_PR_LABEL */.Ak));
});
const enableAutoMerge = (pullRequestId, mergeMethod = 'SQUASH') => manage_merge_queue_awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield (0,octokit/* octokitGraphql */.o)(`
    mutation {
      enablePullRequestAutoMerge(input: { pullRequestId: "${pullRequestId}", mergeMethod: ${mergeMethod} }) {
        clientMutationId
      }
    }
  `);
    }
    catch (error) {
        core.warning('Auto merge could not be enabled. Perhaps you need to enable auto-merge on your repo?');
        core.warning(error);
    }
});


/***/ }),

/***/ 1004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareQueuedPrForMerge": () => (/* binding */ prepareQueuedPrForMerge),
/* harmony export */   "updatePrWithDefaultBranch": () => (/* binding */ updatePrWithDefaultBranch)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9042);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6161);
/* harmony import */ var _manage_merge_queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7473);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const prepareQueuedPrForMerge = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield _octokit__WEBPACK_IMPORTED_MODULE_3__/* .octokit.pulls.list */ .K.pulls.list(Object.assign({ state: 'open', per_page: 100 }, _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.repo));
    const pullRequest = findNextPrToMerge(data);
    if (pullRequest) {
        return updatePrWithDefaultBranch(pullRequest);
    }
});
const findNextPrToMerge = (pullRequests) => {
    var _a;
    return (_a = pullRequests.find(pr => hasRequiredLabels(pr, [_constants__WEBPACK_IMPORTED_MODULE_1__/* .READY_FOR_MERGE_PR_LABEL */ .Ak, _constants__WEBPACK_IMPORTED_MODULE_1__/* .JUMP_THE_QUEUE_PR_LABEL */ .nJ]))) !== null && _a !== void 0 ? _a : pullRequests.find(pr => hasRequiredLabels(pr, [_constants__WEBPACK_IMPORTED_MODULE_1__/* .READY_FOR_MERGE_PR_LABEL */ .Ak, _constants__WEBPACK_IMPORTED_MODULE_1__/* .FIRST_QUEUED_PR_LABEL */ .IH]));
};
const hasRequiredLabels = (pr, requiredLabels) => requiredLabels.every(mergeQueueLabel => pr.labels.some(label => label.name === mergeQueueLabel));
const updatePrWithDefaultBranch = (pullRequest) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    if (((_a = pullRequest.head.user) === null || _a === void 0 ? void 0 : _a.login) && ((_b = pullRequest.base.user) === null || _b === void 0 ? void 0 : _b.login) && ((_c = pullRequest.head.user) === null || _c === void 0 ? void 0 : _c.login) !== ((_d = pullRequest.base.user) === null || _d === void 0 ? void 0 : _d.login)) {
        try {
            // update fork default branch with upstream
            yield _octokit__WEBPACK_IMPORTED_MODULE_3__/* .octokit.repos.mergeUpstream */ .K.repos.mergeUpstream(Object.assign(Object.assign({}, _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.repo), { branch: pullRequest.base.repo.default_branch }));
        }
        catch (error) {
            if (error.status === 409) {
                _actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed('Attempt to update fork branch with upstream failed; conflict on default branch between fork and upstream.');
            }
            else
                _actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed(error.message);
        }
    }
    try {
        yield _octokit__WEBPACK_IMPORTED_MODULE_3__/* .octokit.repos.merge */ .K.repos.merge(Object.assign({ base: pullRequest.head.ref, head: 'HEAD' }, _actions_github__WEBPACK_IMPORTED_MODULE_2__.context.repo));
    }
    catch (error) {
        const noEvictUponConflict = _actions_core__WEBPACK_IMPORTED_MODULE_0__.getBooleanInput('no_evict_upon_conflict');
        if (error.status === 409) {
            if (!noEvictUponConflict)
                yield (0,_manage_merge_queue__WEBPACK_IMPORTED_MODULE_4__.removePrFromQueue)(pullRequest);
            _actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed('The first PR in the queue has a merge conflict.');
        }
        else
            _actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed(error.message);
    }
});


/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveLabel": () => (/* binding */ RemoveLabel),
/* harmony export */   "removeLabel": () => (/* binding */ removeLabel),
/* harmony export */   "removeLabelIfExists": () => (/* binding */ removeLabelIfExists)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_generated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3476);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6161);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class RemoveLabel extends _types_generated__WEBPACK_IMPORTED_MODULE_3__/* .HelperInputs */ .s {
    constructor() {
        super(...arguments);
        this.label = '';
    }
}
const removeLabel = ({ label }) => __awaiter(void 0, void 0, void 0, function* () { return removeLabelIfExists(label, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.issue.number); });
const removeLabelIfExists = (labelName, issue_number) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.issues.removeLabel */ .K.issues.removeLabel(Object.assign({ name: labelName, issue_number }, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo));
    }
    catch (error) {
        if (error.status === 404) {
            _actions_core__WEBPACK_IMPORTED_MODULE_0__.info('Label is not present on PR.');
        }
    }
});


/***/ }),

/***/ 2209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetCommitStatus": () => (/* binding */ SetCommitStatus),
/* harmony export */   "setCommitStatus": () => (/* binding */ setCommitStatus)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_generated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3476);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8710);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6161);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class SetCommitStatus extends _types_generated__WEBPACK_IMPORTED_MODULE_4__/* .HelperInputs */ .s {
    constructor() {
        super(...arguments);
        this.sha = '';
        this.context = '';
        this.state = '';
    }
}
const setCommitStatus = ({ sha, context, state, description, target_url, skip_if_already_set }) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0,bluebird__WEBPACK_IMPORTED_MODULE_2__.map)(context.split('\n').filter(Boolean), (context) => __awaiter(void 0, void 0, void 0, function* () {
        if (skip_if_already_set === 'true') {
            const check_runs = yield _octokit__WEBPACK_IMPORTED_MODULE_3__/* .octokit.checks.listForRef */ .K.checks.listForRef(Object.assign(Object.assign({}, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo), { ref: sha }));
            const run = check_runs.data.check_runs.find(({ name }) => name === context);
            const runCompletedAndIsValid = (run === null || run === void 0 ? void 0 : run.status) === 'completed' && ((run === null || run === void 0 ? void 0 : run.conclusion) === 'failure' || (run === null || run === void 0 ? void 0 : run.conclusion) === 'success');
            if (runCompletedAndIsValid) {
                _actions_core__WEBPACK_IMPORTED_MODULE_0__.info(`${context} already completed with a ${run.conclusion} conclusion.`);
                return;
            }
        }
        _octokit__WEBPACK_IMPORTED_MODULE_3__/* .octokit.repos.createCommitStatus */ .K.repos.createCommitStatus(Object.assign({ sha,
            context, state: state, description,
            target_url }, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo));
    }));
});


/***/ }),

/***/ 6161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ octokit),
/* harmony export */   "o": () => (/* binding */ octokitGraphql)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_node_fetch_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3006);
/* harmony import */ var _adobe_node_fetch_retry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_node_fetch_retry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_2__);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



const githubToken = _actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput('github_token', { required: true });
const { rest: octokit, graphql: octokitGraphql } = (0,_actions_github__WEBPACK_IMPORTED_MODULE_2__.getOctokit)(githubToken, { request: { fetch: _adobe_node_fetch_retry__WEBPACK_IMPORTED_MODULE_1__ } });


/***/ }),

/***/ 3476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ HelperInputs)
/* harmony export */ });
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class HelperInputs {
}


/***/ }),

/***/ 489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ convertToTeamSlug)
/* harmony export */ });
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const convertToTeamSlug = (codeOwner) => codeOwner.substring(codeOwner.indexOf('/') + 1);


/***/ }),

/***/ 9180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ getChangedFilepaths)
/* harmony export */ });
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6161);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const getChangedFilepaths = (pull_number, ignore_deleted) => __awaiter(void 0, void 0, void 0, function* () {
    const changedFiles = yield paginateAllChangedFilepaths(pull_number);
    const filesToMap = ignore_deleted ? changedFiles.filter(file => file.status !== 'removed') : changedFiles;
    return filesToMap.map(file => file.filename);
});
const paginateAllChangedFilepaths = (pull_number, page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield _octokit__WEBPACK_IMPORTED_MODULE_1__/* .octokit.pulls.listFiles */ .K.pulls.listFiles(Object.assign({ pull_number, per_page: 100, page }, _actions_github__WEBPACK_IMPORTED_MODULE_0__.context.repo));
    if (!response.data.length) {
        return [];
    }
    return response.data.concat(yield paginateAllChangedFilepaths(pull_number, page + 1));
});


/***/ }),

/***/ 7290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ getCoreMemberLogins),
/* harmony export */   "q": () => (/* binding */ getRequiredCodeOwnersEntries)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codeowners_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4445);
/* harmony import */ var codeowners_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codeowners_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(250);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _get_changed_filepaths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9180);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8710);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6161);
/* harmony import */ var _convert_to_team_slug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(489);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const getCoreMemberLogins = (pull_number, teams) => __awaiter(void 0, void 0, void 0, function* () {
    const codeOwners = teams !== null && teams !== void 0 ? teams : getCodeOwnersFromEntries(yield getRequiredCodeOwnersEntries(pull_number));
    const teamsAndLogins = yield getCoreTeamsAndLogins(codeOwners);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniq)(teamsAndLogins.map(({ login }) => login));
});
const getRequiredCodeOwnersEntries = (pull_number) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const codeOwners = (_a = (yield (0,codeowners_utils__WEBPACK_IMPORTED_MODULE_1__.loadOwners)(process.cwd()))) !== null && _a !== void 0 ? _a : [];
    const changedFilePaths = yield (0,_get_changed_filepaths__WEBPACK_IMPORTED_MODULE_4__/* .getChangedFilepaths */ .s)(pull_number);
    return changedFilePaths.map(filePath => (0,codeowners_utils__WEBPACK_IMPORTED_MODULE_1__.matchFile)(filePath, codeOwners)).filter(Boolean);
});
const getCoreTeamsAndLogins = (codeOwners) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(codeOwners === null || codeOwners === void 0 ? void 0 : codeOwners.length)) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed('No code owners found. Please provide a "teams" input or set up a CODEOWNERS file in your repo.');
        throw new Error();
    }
    const teamsAndLogins = yield (0,bluebird__WEBPACK_IMPORTED_MODULE_5__.map)(codeOwners, (team) => __awaiter(void 0, void 0, void 0, function* () {
        return _octokit__WEBPACK_IMPORTED_MODULE_6__/* .octokit.teams.listMembersInOrg */ .K.teams.listMembersInOrg({
            org: _actions_github__WEBPACK_IMPORTED_MODULE_3__.context.repo.owner,
            team_slug: team,
            per_page: 100
        })
            .then(listMembersResponse => listMembersResponse.data.map(({ login }) => ({ team, login })));
    }));
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.union)(...teamsAndLogins);
});
const getCodeOwnersFromEntries = (codeOwnersEntries) => {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniq)(codeOwnersEntries
        .map(entry => entry.owners)
        .flat()
        .filter(Boolean)
        .map(codeOwner => (0,_convert_to_team_slug__WEBPACK_IMPORTED_MODULE_7__/* .convertToTeamSlug */ .$)(codeOwner)));
};


/***/ }),

/***/ 9938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ notifyUser)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(205);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6161);
/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const notifyUser = ({ login, pull_number, slack_webhook_url }) => __awaiter(void 0, void 0, void 0, function* () {
    _actions_core__WEBPACK_IMPORTED_MODULE_0__.info(`Notifying user ${login}...`);
    const { data: { email } } = yield _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.users.getByUsername */ .K.users.getByUsername({ username: login });
    if (!email) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.info(`No github email found for user ${login}. Ensure you have set your email to be publicly visible on your Github profile.`);
        return;
    }
    const { data: { title, html_url } } = yield _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.pulls.get */ .K.pulls.get(Object.assign({ pull_number }, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo));
    try {
        yield axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].post */ .Z.post(slack_webhook_url, {
            assignee: email,
            title,
            html_url,
            repo: _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.repo
        });
    }
    catch (error) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.warning('User notification failed');
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.warning(error);
    }
});


/***/ }),

/***/ 5757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ paginateAllOpenPullRequests)
/* harmony export */ });
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6161);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);
/*
Copyright 2022 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const paginateAllOpenPullRequests = (page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield _octokit__WEBPACK_IMPORTED_MODULE_0__/* .octokit.pulls.list */ .K.pulls.list(Object.assign({ state: 'open', sort: 'updated', direction: 'desc', per_page: 100, page }, _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo));
    if (!response.data.length) {
        return [];
    }
    return response.data.concat(yield paginateAllOpenPullRequests(page + 1));
});


/***/ })

};
;
//# sourceMappingURL=676.index.js.map