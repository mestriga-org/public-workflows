# Facts

# Miscellaneous

- default run.shell when unspecified is bash in non posix mode
- all shells are run with -e

# Job dependencies

- possible job results are 'success', 'skipped', 'failure' and 'cancelled'
- needs context in job condition contains all ancestor jobs
- continue-on-error replaces 'failure' with 'success':
  - in needs.*.result
  - for determination of workflow result
- workflow result is first result from any job in precedende list: failure, cancelled, success, skipped
- three mutually exclusive tests for if conditions, where success is the default:
	- cancelled(): cancellation requested
	- success(): cancellation not requested and all needs.*.result is 'success'
	- failure(): cancellation not requested and any needs.*.result is 'failure'
- contains(needs.*.result, 'cancelled') can further detect cancelled jobs (concurrency-group cancellations)
- reusable workflows use the same workflow run as the parent
- worflows that use other workflows have invalid syntax if any used workflow has invalid syntax
- workflows, reusable or not, need strictly to be in /.github/workflows, while actions can be anywhere

# Required status checks

- jobs reusing workflows do not generate status checks
- skipped is counted as success

# Refs

#  https://github.com/orgs/community/discussions/45058#discussioncomment-7465690
