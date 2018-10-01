package online_election

type TopVotedCandidate struct {
	persons []int
	times   []int
	toppest []int
}

func getRecentPerson(top int, nums []int, time int, persons []int) int {
	recent := 0
	cur := 0

	for i := 0; i <= time; i++ {
		cur = persons[i]
		if top == nums[cur] {
			recent = cur
		}
	}
	return recent
}

func findToppestVotedPerson(time int, nums []int, topVoted *TopVotedCandidate) {
	top := -1

	if time >= 1 {
		topVoted.toppest[time] = topVoted.toppest[time-1]
	}

	for i := 0; i < len(nums); i++ {
		if nums[i] >= top {
			top = nums[i]
		}
	}

	topVoted.toppest[time] = getRecentPerson(top, nums, time, topVoted.persons)
}

func Constructor(persons []int, times []int) TopVotedCandidate {
	var topVoted TopVotedCandidate
	topVoted.persons = persons
	topVoted.times = times
	topVoted.toppest = make([]int, len(persons))

	var nums []int
	nums = make([]int, len(persons))

	for i := 0; i < len(times); i++ {
		nums[persons[i]]++
		findToppestVotedPerson(i, nums, &topVoted)
	}

	return topVoted
}

func (this *TopVotedCandidate) Q(t int) int {
	maxTimeNum := len(this.times)
	if t >= this.times[maxTimeNum-1] {
		return this.toppest[maxTimeNum-1]
	}

	for i := 0; i < maxTimeNum-1; i++ {
		if t == this.times[i] {
			return this.toppest[i]
		} else if t > this.times[i] && t < this.times[i+1] {
			return this.toppest[i]
		}
	}

	return -1
}
